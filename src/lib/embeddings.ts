// import { openai } from "@ai-sdk/openai";
import { createOllama } from "ollama-ai-provider";
import { embed, embedMany } from "ai";

const ollama = createOllama({
  // baseURL: "http://localhost:11434/api", // For self hosted Convex with Ollama running e.g in Docker & Docker Compose
  baseURL: "https://07b1-196-207-134-198.ngrok-free.app/api", // Test Ollama server thru Ngrok
});
// const embeddingModel = openai.embedding("text-embedding-3-small");
const embeddingModel = ollama.embedding("nomic-embed-text");

function generateChunks(input: string) {
  return input
    .split("\n\n")
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

export async function generateEmbeddings(
  value: string
): Promise<Array<{ content: string; embedding: number[] }>> {
  const chunks = generateChunks(value);

  const { embeddings } = await embedMany({
    model: embeddingModel,
    values: chunks,
  });

  return embeddings.map((embedding, index) => ({
    content: chunks[index],
    embedding,
  }));
}

export async function generateEmbedding(value: string): Promise<number[]> {
  const { embedding } = await embed({
    model: embeddingModel,
    value,
  });

  return embedding;
}
