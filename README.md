# Notes App w/ Convex & RAG

## Prequisites

1. Node.js - JS Runtime
2. Pnpm package manager
3. GitHub Account - Source Control
4. Groq Account - LLM provider
5. Ollama - Embeddings

# Setup Convex

```bash
npm install 
npm run dev:convex:auth # setup auth keys
npm run dev:convex
```


Run development

```bash
npm dev:convex
npm run dev

```


Production build and deploy Convex functions

```bash
npm convex:auth
npm deploy:convex:build

```


