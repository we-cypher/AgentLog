import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">AgentLog</h1>
        <p className="text-xl text-muted-foreground mt-2">
          Log. Learn. Launch.
        </p>
        <p className="text-muted-foreground mt-1">
          Shared-memory & observability platform for AI agents
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No sessions logged yet
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events Logged</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              Start logging to see events
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">
              No agents connected
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Start logging events from your AI agents to see them appear here
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>
    </div>
  );
} 