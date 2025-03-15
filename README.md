# OpenAI-WebSearch-MCP-Server

A server for handling OpenAI web search using MCP (Multi-Config Protocol)

## Overview

This project provides a server-side implementation for handling web search capabilities in OpenAI-powered applications using the Multi-Config Protocol (MCP). It serves as a middleware between OpenAI's services and your applications, enabling advanced web search functionality.

## Features

- Real-time web search integration with OpenAI models
- MCP (Multi-Config Protocol) implementation
- Configurable search parameters
- Response caching for improved performance
- Rate limiting and quota management
- Detailed logging and monitoring

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- OpenAI API key

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/bitibi/OpenAI-WebSearch-MCP-Server.git
   cd OpenAI-WebSearch-MCP-Server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your configuration:
   ```
   OPENAI_API_KEY=your_api_key_here
   PORT=3000
   CACHE_DURATION=3600
   ```

4. Start the server:
   ```
   npm start
   ```

## Configuration

The server can be configured using environment variables or a config file. See [Configuration Guide](docs/configuration.md) for more details.

## API Documentation

### Endpoints

- `POST /search`: Perform a web search
- `GET /status`: Check server status
- `GET /metrics`: Get performance metrics

For complete API documentation, see [API Reference](docs/api.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for providing the foundational models
- Contributors to the MCP specification