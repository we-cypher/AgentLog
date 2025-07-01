export type EventType =
  | "USER_INPUT"
  | "AGENT_THOUGHT"
  | "TOOL_CALL"
  | "TOOL_RESULT"
  | "AGENT_OUTPUT"
  | "ERROR"
  | "SYSTEM";

export interface MemoryEvent {
  sessionId: string;
  agentId?: string;
  type: EventType;
  content: Record<string, any>;
  metadata?: Record<string, any>;
  timestamp?: Date;
}

export interface AgentLogConfig {
  apiKey?: string;
  baseUrl?: string;
  defaultSessionId?: string;
  defaultAgentId?: string;
  timeout?: number;
  retries?: number;
  debug?: boolean;
}

export interface LogResponse {
  success: boolean;
  eventId?: string;
  error?: string;
}

export interface SessionInfo {
  sessionId: string;
  title?: string;
  description?: string;
  userId?: string;
}

// Utility types for different event content structures
export interface UserInputContent {
  message: string;
  source?: string;
  userId?: string;
}

export interface AgentThoughtContent {
  thought: string;
  reasoning?: string;
  confidence?: number;
}

export interface ToolCallContent {
  tool: string;
  function: string;
  arguments: Record<string, any>;
}

export interface ToolResultContent {
  result: any;
  status: "success" | "error";
  error?: string;
}

export interface AgentOutputContent {
  message: string;
  confidence?: number;
  reasoning?: string;
}

export interface ErrorContent {
  error: string;
  stack?: string;
  code?: string;
}

export interface SystemContent {
  event: string;
  details?: Record<string, any>;
} 