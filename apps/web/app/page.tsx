export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - Vercel/Linear Style */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-semibold">AgentLog</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Dashboard</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Sessions</span>
              <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Docs</span>
              <div className="w-8 h-8 rounded-full bg-muted"></div>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">AgentLog</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Log. Learn. Launch.
          </p>
          <p className="text-muted-foreground mt-1">
            Shared-memory & observability platform for AI agents
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium">Total Sessions</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                No sessions logged yet
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium">Events Logged</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                Start logging to see events
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row items-center justify-between space-y-0 p-6 pb-2">
              <h3 className="text-sm font-medium">Active Agents</h3>
            </div>
            <div className="p-6 pt-0">
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                No agents connected
              </p>
            </div>
          </div>
        </div>

        {/* Getting Started */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-8">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Getting Started</h3>
            <p className="text-sm text-muted-foreground">
              Start logging events from your AI agents to see them appear here
            </p>
          </div>
          <div className="p-6 pt-0 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Install the SDK</h3>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                npm install @agentlog/sdk
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">2. Initialize the client</h3>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                {`import { AgentLog } from '@agentlog/sdk';
              
const client = new AgentLog({
  apiKey: 'your-api-key',
  baseUrl: 'http://localhost:3001'
});`}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">3. Start logging</h3>
              <div className="bg-muted p-3 rounded-md font-mono text-sm">
                {`// Log user input
client.logUserInput('Hello, AI assistant!');

// Log agent thought
client.logAgentThought('I need to help the user...');

// Log tool call
client.logToolCall('search', 'web_search', { query: 'AI' });`}
              </div>
            </div>
          </div>
        </div>

        {/* Event Types Demo - Showcase the design system */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Event Types</h3>
            <p className="text-sm text-muted-foreground">
              Different types of events logged by your AI agents
            </p>
          </div>
          <div className="p-6 pt-0">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {[
                { type: 'User Input', color: 'bg-agent-user-input', icon: '💬', desc: 'Input from users' },
                { type: 'Agent Thought', color: 'bg-agent-thought', icon: '🧠', desc: 'Internal reasoning' },
                { type: 'Tool Call', color: 'bg-agent-tool-call', icon: '🔧', desc: 'External tool usage' },
                { type: 'Tool Result', color: 'bg-agent-tool-result', icon: '✅', desc: 'Tool responses' },
                { type: 'Agent Output', color: 'bg-agent-output', icon: '📤', desc: 'Final responses' },
                { type: 'Error', color: 'bg-agent-error', icon: '❌', desc: 'Error events' },
              ].map((event) => (
                <div key={event.type} className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className={`w-10 h-10 ${event.color} rounded-lg flex items-center justify-center text-white text-lg shadow-sm`}>
                    {event.icon}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{event.type}</div>
                    <div className="text-xs text-muted-foreground">{event.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 