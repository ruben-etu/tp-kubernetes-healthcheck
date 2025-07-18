# Frontend Node.js Website

This project is a simple Node.js website using Express. It exposes a `/health` endpoint that makes a server-side call to `http://backend/hello`. If the response is not 200 or takes more than 50ms, it returns a 500 status. Otherwise, it returns 200.

## Getting Started

### Install dependencies

```zsh
npm install
```

### Run the server

```zsh
node index.js
```

The server will start on port 3000 by default.

## Endpoint

- `GET /health` — Calls `http://backend/hello` and returns 200 or 500 based on the response and timing.

## Project Structure

- `index.js` — Main server file
- `package.json` — Project metadata and dependencies

## Custom Copilot Instructions

See `.github/copilot-instructions.md` for workspace-specific Copilot guidance.
