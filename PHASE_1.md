# Phase 1: Internal Usable Milestone (2 weeks)

**Goal**: Functional AgentLog system for founder/dev testing

**Launch Criteria**: 
- ✅ SDK can log events to database
- ✅ Frontend displays session timeline
- ✅ Google OAuth authentication works
- ✅ Multi-user data isolation
- ✅ Local development setup documented

---

## 🗄️ Database & Backend

### Core API Endpoints
- [ ] `POST /v1/events` - Create memory event (versioned API)
- [ ] `GET /v1/sessions` - List user sessions  
- [ ] `GET /v1/sessions/:sessionId/events` - Get session timeline
- [ ] `GET /api/health` - Health check endpoint

### API Design Decisions
- [ ] **Event Ordering**: Use server timestamp + add `receivedAt` field
- [ ] **Session Creation**: Auto-create session on first event (defer POST /sessions)
- [ ] **API Versioning**: All endpoints under `/v1/` for future evolution

### Authentication & Authorization
- [ ] NextAuth.js Google OAuth setup
- [ ] JWT middleware for API routes
- [ ] User creation on first login
- [ ] API key generation for SDK usage
- [ ] Multi-tenant data isolation (userId filtering)

### Database Schema
- [ ] Prisma schema deployed to local PostgreSQL
- [ ] User, Session, MemoryEvent models working
- [ ] Database migrations working (`pnpm db:push`)
- [ ] Foreign key relationships enforcing data integrity

### Database Performance & Indexing
- [ ] Index on `(userId, sessionId)` for session queries
- [ ] Index on `(sessionId, createdAt)` for timeline queries
- [ ] Seed script with 50 fake sessions for UI testing
- [ ] Add `receivedAt` timestamp field for event ordering

### Express API Server
- [ ] CORS configured for frontend (whitelist origins)
- [ ] Error handling middleware
- [ ] JSON body parsing
- [ ] Security headers with `helmet()`
- [ ] Basic CORS protection

---

## 🎨 Frontend (Next.js)

### Authentication Flow
- [ ] Google OAuth login button
- [ ] Protected routes (redirect to login)
- [ ] User session management
- [ ] Logout functionality
- [ ] Display user info (name, email)

### Session Timeline View
- [ ] List all user sessions
- [ ] Select session to view timeline
- [ ] Display events in chronological order
- [ ] Show event type, content, timestamp
- [ ] Basic styling with Tailwind + shadcn/ui

### Core UI Components
- [ ] Navigation header with user menu
- [ ] Session list with titles/descriptions
- [ ] Event cards with type indicators
- [ ] Loading states and error handling
- [ ] Responsive layout (desktop focus)

### Pages & Routes
- [ ] `/` - Dashboard with session list
- [ ] `/sessions/[sessionId]` - Session timeline view
- [ ] `/api/auth/*` - NextAuth routes
- [ ] 404 and error pages

---

## 📦 SDK (@agentlog/sdk)

### Core Logging Methods
- [ ] `logUserInput()` - Log user messages
- [ ] `logAgentThought()` - Log agent reasoning
- [ ] `logToolCall()` - Log tool invocations
- [ ] `logToolResult()` - Log tool responses
- [ ] `logAgentOutput()` - Log agent responses
- [ ] `log()` - Generic event logging

### SDK Features
- [ ] Client configuration (apiKey, baseUrl)
- [ ] Automatic session ID generation
- [ ] Error handling and retries
- [ ] TypeScript type definitions
- [ ] Debug mode for development

### SDK Distribution
- [ ] Build system working (tsup)
- [ ] ESM and CJS exports
- [ ] TypeScript declarations
- [ ] Package.json exports configured
- [ ] Local linking for testing (`pnpm link`)

### SDK Testing
- [ ] Jest unit tests for `log()` happy path
- [ ] Error handling test cases
- [ ] TypeScript compilation tests
- [ ] Mock API server for testing

---

## 🛠️ Development Setup

### Monorepo Configuration
- [ ] TurboRepo pipeline working
- [ ] pnpm workspaces configured
- [ ] Cross-package dependencies resolved
- [ ] `pnpm dev` starts all apps
- [ ] `pnpm build` builds all packages

### Database Setup
- [ ] Local PostgreSQL installation guide
- [ ] Environment variables documented
- [ ] Database creation scripts
- [ ] Connection testing commands
- [ ] Prisma Studio access

### Development Commands
- [ ] `pnpm dev` - Start all development servers
- [ ] `pnpm build` - Build all packages
- [ ] `pnpm db:push` - Apply schema changes
- [ ] `pnpm db:seed` - Populate test data
- [ ] `pnpm db:studio` - Open database GUI

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

### Manual Testing Checklist
- [ ] User can sign in with Google
- [ ] SDK can log different event types
- [ ] Events appear in frontend timeline
- [ ] Multiple users have isolated data
- [ ] All development commands work
- [ ] Error states display properly

### Integration Testing
- [ ] SDK → API → Database flow
- [ ] Authentication protects API routes
- [ ] Session creation and event logging
- [ ] Frontend displays real SDK data
- [ ] Multiple browser sessions work

### Performance Baseline
- [ ] API responds under 500ms
- [ ] Frontend loads under 2s
- [ ] Database queries are indexed
- [ ] No N+1 query problems
- [ ] Memory usage is reasonable

---

## 🚀 Launch Criteria

**Phase 1 Complete When:**
- ✅ Founder can demo complete user flow
- ✅ SDK logs events that appear in UI
- ✅ Authentication and authorization work
- ✅ Codebase is documented and runnable
- ✅ No critical bugs in happy path
- ✅ Ready for early developer testing

**Handoff to Phase 2:**
- Working system with basic observability features
- Stable foundation for adding MCP support
- Clear developer documentation for contributors

---

## 🚦 Scope Guardrails

**If Phase 1 slips beyond 2 weeks:**
- Cut extra endpoints/UI polish
- Focus on: log + timeline + auth
- Shipping core functionality is enough

**Must-Have Core:**
- SDK can log events to database
- Frontend displays session timeline
- Google OAuth works 