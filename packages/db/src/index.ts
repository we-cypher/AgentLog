import { PrismaClient } from "@prisma/client";

// Create a global instance to prevent multiple connections in development
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined;
}

export const db =
  globalThis.__prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = db;
}

// Export types
export * from "@prisma/client";
export type { Prisma } from "@prisma/client";

// Export utility functions
export async function connectDb() {
  try {
    await db.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
}

export async function disconnectDb() {
  await db.$disconnect();
} 