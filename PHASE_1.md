# Phase 1: AgentLog Local - No Setup Required (2 weeks)

**Goal**: `npx @agentlog/local` gives developers instant AgentLog experience

**Three-Tier Strategy - Tier 1**: Local development mode with SQLite, no auth, artificial limits

**Launch Criteria**:

- ✅ `npx @agentlog/local` starts Next.js app in 30 seconds
- ✅ SDK can log events to local SQLite database
- ✅ Frontend displays session timeline with real data
- ✅ No authentication required (single user mode)
- ✅ Artificial limits: 10 sessions, 1K events max
- ✅ Export functionality to migrate to hosted version

---

## 📦 AgentLog Local Package (`@agentlog/local`)

### NPX Package Creation

- [ ] Create `packages/local/` package for npx distribution
- [ ] CLI script that starts local Next.js server
- [ ] Automatic port detection (3000, 3001, etc.)
- [ ] Local SQLite database initialization
- [ ] Browser auto-opening after startup

### Local SQLite Backend

- [ ] SQLite database for local storage (no PostgreSQL required)
- [ ] Prisma schema adapted for SQLiteAdapter
- [ ] Local API server (Next.js API routes)
- [ ] Single-user mode (no authentication required)
- [ ] Session auto-creation with UUIDs

### Core API Endpoints (Local Mode)

- [ ] `POST /api/events` - Create memory event (local SQLite)
- [ ] `GET /api/sessions` - List all sessions (no user filtering)
- [ ] `GET /api/sessions/[id]/events` - Get session timeline
- [ ] `GET /api/export` - Export all data as JSON

### Artificial Limits Implementation

- [ ] **Session Limit**: Max 10 sessions (delete oldest when exceeded)
- [ ] **Event Limit**: Max 1,000 events total (show warning at 800)
- [ ] **Storage Warning**: Display when approaching limits
- [ ] **Upgrade Prompts**: Subtle messaging about hosted version

### Data Export/Migration

- [ ] Export all sessions as JSON format
- [ ] Import functionality for migrated data
- [ ] CLI export command (`agentlog export sessions.json`)
- [ ] Migration guide to hosted version

---

## 🎨 Frontend (Next.js Local Mode)

### Local-First UI Features

- [ ] **No Login Required**: Direct access to dashboard
- [ ] Local storage usage indicators (sessions: 3/10, events: 247/1000)
- [ ] Upgrade prompts when approaching limits
- [ ] Export button for data migration
- [ ] "Running locally" status indicator

### Session Timeline View

- [ ] List all local sessions (no user filtering)
- [ ] Select session to view timeline
- [ ] Display events in chronological order
- [ ] Show event type, content, timestamp
- [ ] Basic styling with Tailwind + shadcn/ui

### Limit Management UI

- [ ] Usage progress bars (sessions and events)
- [ ] Warning messages at 80% capacity
- [ ] Automatic cleanup of oldest sessions when at limit
- [ ] Clear explanation of local vs hosted differences

### Core UI Components

- [ ] Simple navigation header (no user menu)
- [ ] Session list with titles/descriptions
- [ ] Event cards with type indicators
- [ ] Loading states and error handling
- [ ] Export/import data controls

### Pages & Routes

- [ ] `/` - Dashboard with session list
- [ ] `/sessions/[sessionId]` - Session timeline view
- [ ] `/export` - Data export/import page
- [ ] Local mode help/upgrade page

---

## 📦 SDK (@agentlog/sdk) - Local Mode Support

### Core Logging Methods

- [ ] `logUserInput()` - Log user messages
- [ ] `logAgentThought()` - Log agent reasoning
- [ ] `logToolCall()` - Log tool invocations
- [ ] `logToolResult()` - Log tool responses
- [ ] `logAgentOutput()` - Log agent responses
- [ ] `log()` - Generic event logging

### Local Mode Configuration

- [ ] **Auto-detection**: SDK detects local AgentLog (localhost:3000)
- [ ] **No API Key Required**: Skip authentication for local usage
- [ ] Graceful fallback if local server not running
- [ ] Configuration for local vs hosted modes
- [ ] Session persistence across local restarts

### SDK Features

- [ ] Client configuration (baseUrl defaulting to localhost)
- [ ] Automatic session ID generation
- [ ] Error handling and retries
- [ ] TypeScript type definitions
- [ ] Debug mode for development
- [ ] Local mode detection and messaging

### SDK Distribution

- [ ] Build system working (tsup)
- [ ] ESM and CJS exports
- [ ] TypeScript declarations
- [ ] Package.json exports configured
- [ ] NPM publishing for @agentlog/sdk

### SDK Testing with Local Mode

- [ ] Jest unit tests for local mode detection
- [ ] Error handling when local server down
- [ ] TypeScript compilation tests
- [ ] Integration tests with local SQLite

---

## 🛠️ Development Setup (Local-First)

### Monorepo Configuration

- [ ] TurboRepo pipeline working
- [ ] pnpm workspaces configured
- [ ] Cross-package dependencies resolved
- [ ] `pnpm dev:local` starts local package
- [ ] `pnpm build` builds all packages

### Local Package Setup

- [ ] **No Database Required**: SQLite embedded in package
- [ ] Minimal environment variables
- [ ] Automatic SQLite initialization
- [ ] Hot reload for local development
- [ ] Package bundling for npx distribution

### Development Commands

- [ ] `pnpm dev:local` - Start local AgentLog package
- [ ] `pnpm build:local` - Build npx package
- [ ] `pnpm pack:local` - Package for npx testing
- [ ] `npx @agentlog/local` - Test npx installation
- [ ] SQLite browser for debugging (optional)

---

## 📚 Documentation

### README Updates

- [ ] Complete setup instructions
- [ ] Prerequisites clearly listed
- [ ] Environment variable configuration
- [ ] Development workflow documented
- [ ] Troubleshooting section

### SDK Documentation

- [ ] Basic usage examples
- [ ] API reference for all methods
- [ ] Configuration options
- [ ] Error handling examples
- [ ] TypeScript usage examples

---

## 🧪 Testing Strategy

### Unit Testing

- [ ] Jest setup for SDK package
- [ ] Supertest setup for API testing
- [ ] Test database configuration
- [ ] CI/CD test pipeline setup

---

## ✅ Testing & Validation

### Manual Testing Checklist (Local Mode)

- [ ] `npx @agentlog/local` starts successfully in 30 seconds
- [ ] SDK can log different event types to local SQLite
- [ ] Events appear in frontend timeline immediately
- [ ] Session limits work (10 sessions max)
- [ ] Event limits work (1000 events max)
- [ ] Export functionality works
- [ ] Upgrade prompts appear at appropriate times

### Integration Testing

- [ ] SDK → Local API → SQLite flow
- [ ] No authentication required (local mode)
- [ ] Session creation and event logging
- [ ] Frontend displays real SDK data
- [ ] Browser restart preserves data
- [ ] Multiple local instances work independently

### Performance Baseline (Local)

- [ ] Startup completes under 30 seconds
- [ ] Frontend loads under 2 seconds
- [ ] SQLite queries respond under 100ms
- [ ] No memory leaks in long sessions
- [ ] Package size under 50MB

---

## 🚀 Launch Criteria

**Phase 1 Complete When:**

- ✅ `npx @agentlog/local` works in 30 seconds on any machine
- ✅ SDK logs events that appear in local UI
- ✅ No setup or authentication required
- ✅ Artificial limits and upgrade prompts work
- ✅ Export functionality enables migration
- ✅ Ready for developer community testing

**Handoff to Phase 2:**

- Local AgentLog is the easiest way to try the product
- Proven value proposition with instant gratification
- Natural upgrade funnel to self-hosted/cloud versions
- Foundation for adding advanced features

---

## 🚦 Scope Guardrails

**If Phase 1 slips beyond 2 weeks:**

- Cut export functionality (add in Phase 2)
- Focus on: npx → local app → log events → see timeline
- Shipping instant value is everything

**Must-Have Core:**

- `npx @agentlog/local` starts working app
- SDK logs events to local SQLite
- Frontend displays session timeline
- Limits work to drive upgrade consideration

**Success Metric:** Developer can go from hearing about AgentLog to seeing their agent events in under 2 minutes.
