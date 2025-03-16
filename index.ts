import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import OpenAI from "openai";
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Verify API key is present
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY is not set in .env file');
}

// Initialize OpenAI client with API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Create an MCP server
const server = new McpServer({
  name: "OpenAI-WebSearch",
  version: "1.0.0"
});

// Add web search tool
server.tool("web_search",
  { query: z.string() },
  async ({ query }) => {
    try {
      const response = await openai.responses.create({
        model: "gpt-4o",
        tools: [{ type: "web_search_preview" }],
        input: query,
      });

      return {
        content: [{ 
          type: "text", 
          text: response.output_text
        }]
      };
    } catch (error: any) {
      return {
        content: [{ 
          type: "text", 
          text: `Error performing web search: ${error.message}`
        }]
      };
    }
  }
);

// Start receiving messages on stdin and sending messages on stdout
const transport = new StdioServerTransport();
await server.connect(transport);