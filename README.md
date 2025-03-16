# OpenAI Web Search MCP Server

A TypeScript implementation of an MCP server that provides web search functionality using OpenAI's web search preview feature. This server utilizes OpenAI's latest Responses API with the `web_search_preview` capability, allowing AI models to perform real-time web searches through the OpenAI API.

## Installation

You can run this package directly using npx:

```bash
npx openai-websearch-mcp-server
```

Or install it globally:

```bash
npm install -g openai-websearch-mcp-server
```

## Usage with MCP Clients

This server is designed to be used with MCP (Model Context Protocol) clients. Here's how to set it up with different clients:

### Claude Desktop

Add the following configuration to your Claude Desktop settings:

```json
{
  "mcpServers": {
    "openai_websearch": {
      "command": "npx",
      "args": [
        "-y",
        "openai-websearch-mcp-server"
      ],
      "env": {
        "OPENAI_API_KEY": "your_api_key"
      }
    }
  }
}
```

Replace `your_api_key` with your actual OpenAI API key.

## Environment Setup

1. Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

2. Run the server:

```bash
openai-websearch-mcp
```

By default, the server runs on port 3000. You can change this by setting the PORT environment variable:

```bash
PORT=8080 openai-websearch-mcp
```

## API

The server provides a web search tool that can be used through the MCP protocol. The tool is named `web_search` and accepts a query string as input. Under the hood, it uses OpenAI's Responses API with the `web_search_preview` feature to perform real-time web searches, providing up-to-date information from across the internet.

## Development

To set up the development environment:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Building

To build the package:

```bash
npm run build
```

## License

MIT 