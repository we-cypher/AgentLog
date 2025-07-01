import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create a test user
  const user = await prisma.user.create({
    data: {
      email: "demo@agentlog.dev",
      name: "Demo User",
      apiKey: "al_demo_key_123456789",
    },
  });

  console.log("Created user:", user.email);

  // Create a demo session
  const session = await prisma.session.create({
    data: {
      sessionId: "demo-session-001",
      userId: user.id,
      title: "Demo AI Agent Session",
      description: "A sample session showing different types of agent events",
    },
  });

  console.log("Created session:", session.sessionId);

  // Create sample events
  const events = [
    {
      sessionId: session.sessionId,
      agentId: "assistant-001",
      type: "USER_INPUT" as const,
      content: { message: "Hello, can you help me analyze some data?" },
      metadata: { source: "web" },
    },
    {
      sessionId: session.sessionId,
      agentId: "assistant-001",
      type: "AGENT_THOUGHT" as const,
      content: { 
        thought: "The user wants data analysis help. I should ask for more details about the data." 
      },
      metadata: { reasoning: "clarification_needed" },
    },
    {
      sessionId: session.sessionId,
      agentId: "assistant-001",
      type: "TOOL_CALL" as const,
      content: {
        tool: "data_analyzer",
        function: "get_available_datasets",
        arguments: {},
      },
      metadata: { tool_version: "1.0.0" },
    },
    {
      sessionId: session.sessionId,
      agentId: "assistant-001",
      type: "TOOL_RESULT" as const,
      content: {
        result: ["sales_data.csv", "user_behavior.json", "market_trends.xlsx"],
        status: "success",
      },
      metadata: { execution_time_ms: 150 },
    },
    {
      sessionId: session.sessionId,
      agentId: "assistant-001",
      type: "AGENT_OUTPUT" as const,
      content: {
        message: "I can help you analyze data! I found 3 available datasets: sales_data.csv, user_behavior.json, and market_trends.xlsx. Which one would you like to explore?",
      },
      metadata: { confidence: 0.95 },
    },
  ];

  for (const event of events) {
    await prisma.memoryEvent.create({ data: event });
    // Add small delay to ensure different timestamps
    await new Promise(resolve => setTimeout(resolve, 10));
  }

  console.log(`Created ${events.length} sample events`);
  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 