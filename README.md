# AgentLog

**Log. Learn. Launch.**

> Memory, visibility, and interoperability for multi-agent systems.

## What is AgentLog?

AgentLog does 3 simple things:

✅ **Saves everything your agents do** — inputs, thoughts, tool calls, and outputs  
🧠 **Gives you a dashboard** to replay and debug multi-agent sessions  
🌐 **Supports MCP** (Model Context Protocol) so any agent framework can plug in  

That's it — memory, visibility, and interoperability for AI agents.

### Why AgentLog?

Traditional monitoring tools weren't built for AI agents. When your agent fails, hallucinates, or makes poor decisions, you need more than just LLM logs - you need to understand the entire reasoning process.

**AgentLog provides:**
- **Session Replay**: Watch your agents think, decide, and act step-by-step
- **Multi-Agent Debugging**: Understand complex agent interactions and handoffs  
- **Framework Agnostic**: Works with LangGraph, AutoGen, CrewAI, or custom frameworks
- **Shared Memory**: Agents can learn from past sessions and each other
- **Timeline Visualization**: See the complete decision flow from input to output

### Who is AgentLog for?

🏢 **Enterprise AI Teams** - Debug production agent failures and optimize workflows  
🧑‍💻 **AI Developers** - Build better agents with visibility into reasoning patterns  
🔬 **AI Researchers** - Analyze agent behavior and multi-agent interactions  
⚡ **DevOps Teams** - Monitor and alert on agent performance like any other service

## Quick Start

### Prerequisites
- Node.js 20+
- pnpm 8+
- PostgreSQL 16+

### Setup

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Setup database**
   ```sql
   CREATE DATABASE agentlog;
   CREATE USER agentlog WITH PASSWORD 'password';
   GRANT ALL PRIVILEGES ON DATABASE agentlog TO agentlog;
   ```

3. **Configure environment**
   ```bash
   cp env.example .env
   # Edit .env with your database URL and OAuth credentials
   ```

4. **Initialize database**
   ```bash
   pnpm db:push
   pnpm db:seed
   ```

5. **Start development**
   ```bash
   pnpm dev
   ```

Visit http://localhost:3000 for the frontend and http://localhost:3001 for the API.

## Architecture

- **Frontend**: Next.js 14 + Tailwind CSS
- **Backend**: Express.js + TypeScript  
- **Database**: PostgreSQL + Prisma
- **SDK**: TypeScript client library
- **Monorepo**: TurboRepo + pnpm

## SDK Usage

```typescript
import { AgentLog } from '@agentlog/sdk';

const client = new AgentLog({
  apiKey: 'your-api-key',
  baseUrl: 'http://localhost:3001'
});

// Log events
await client.logUserInput('Hello!');
await client.logAgentThought('Processing request...');
await client.logToolCall('search', 'web_search', { query: 'AI' });
await client.logAgentOutput('Here are the results...');
```

## 🥊 How AgentLog Compares

### vs. mem0
**mem0** gives agents long-term memory to remember past conversations.  
**AgentLog** gives developers observability to debug and optimize agent behavior.

*Think: mem0 = agent memory, AgentLog = developer visibility*

### vs. LangSmith  
**LangSmith** monitors LangChain applications and LLM calls.  
**AgentLog** specializes in multi-agent workflows with session replay and cross-framework support.

*Think: LangSmith = LLM monitoring, AgentLog = agent workflow debugging*

### vs. Traditional APM (New Relic, etc.)
**Traditional APM** monitors web services, databases, and infrastructure.  
**AgentLog** understands agent reasoning, tool usage, and multi-agent coordination.

*Think: Traditional APM = server monitoring, AgentLog = agent intelligence monitoring*

### Key Differentiators

| Feature | AgentLog | mem0 | LangSmith | Traditional APM |
|---------|----------|------|-----------|-----------------|
| **Agent Memory** | ✅ Session-based | ✅ Persistent | ❌ | ❌ |
| **Multi-Agent Support** | ✅ Native | ❌ | ⚠️ Limited | ❌ |
| **Session Replay** | ✅ Timeline view | ❌ | ⚠️ Traces only | ❌ |
| **Framework Agnostic** | ✅ MCP support | ⚠️ Limited | ❌ LangChain only | ❌ |
| **Thought Process Visibility** | ✅ Agent reasoning | ❌ | ⚠️ LLM calls only | ❌ |
| **Cross-Session Learning** | ✅ Shared insights | ❌ | ❌ | ❌ |

**AgentLog is the only platform built specifically for debugging and optimizing multi-agent systems.** 