# OpenAI Web Search MCP Server

A TypeScript implementation of an MCP server that provides web search functionality using OpenAI's web search preview feature.

## Installation

You can run this package directly using npx:

```bash
npx openai-websearch-mcp-server
```

Or install it globally:

```bash
npm install -g openai-websearch-mcp-server
```

## Usage

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

The server provides a web search tool that can be used through the MCP protocol. The tool is named `web_search` and accepts a query string as input.

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