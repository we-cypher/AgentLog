import axios, { AxiosInstance, AxiosError } from "axios";
import {
  AgentLogConfig,
  MemoryEvent,
  LogResponse,
  SessionInfo,
  EventType,
} from "./types";

export class AgentLog {
  private client: AxiosInstance;
  private config: Required<AgentLogConfig>;

  constructor(config: AgentLogConfig = {}) {
    this.config = {
      apiKey: config.apiKey || process.env.AGENTLOG_API_KEY || "",
      baseUrl: config.baseUrl || process.env.AGENTLOG_BASE_URL || "http://localhost:3001",
      defaultSessionId: config.defaultSessionId || this.generateSessionId(),
      defaultAgentId: config.defaultAgentId || "default-agent",
      timeout: config.timeout || 5000,
      retries: config.retries || 3,
      debug: config.debug || false,
    };

    this.client = axios.create({
      baseURL: this.config.baseUrl,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json",
        ...(this.config.apiKey && { Authorization: `Bearer ${this.config.apiKey}` }),
      },
    });

    if (this.config.debug) {
      console.log("AgentLog SDK initialized:", {
        baseUrl: this.config.baseUrl,
        sessionId: this.config.defaultSessionId,
        agentId: this.config.defaultAgentId,
      });
    }
  }

  /**
   * Log a memory event
   */
  async log(event: Partial<MemoryEvent>): Promise<LogResponse> {
    const fullEvent: MemoryEvent = {
      sessionId: event.sessionId || this.config.defaultSessionId,
      agentId: event.agentId || this.config.defaultAgentId,
      type: event.type!,
      content: event.content!,
      metadata: event.metadata,
      timestamp: event.timestamp || new Date(),
    };

    try {
      const response = await this.client.post("/api/events", fullEvent);
      
      if (this.config.debug) {
        console.log("Event logged successfully:", fullEvent.type);
      }

      return {
        success: true,
        eventId: response.data.id,
      };
    } catch (error) {
      const errorMessage = this.handleError(error);
      
      if (this.config.debug) {
        console.error("Failed to log event:", errorMessage);
      }

      return {
        success: false,
        error: errorMessage,
      };
    }
  }

  /**
   * Log user input
   */
  async logUserInput(
    message: string,
    options: {
      sessionId?: string;
      source?: string;
      userId?: string;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<LogResponse> {
    return this.log({
      sessionId: options.sessionId,
      type: "USER_INPUT",
      content: {
        message,
        source: options.source,
        userId: options.userId,
      },
      metadata: options.metadata,
    });
  }

  /**
   * Log agent thought/reasoning
   */
  async logAgentThought(
    thought: string,
    options: {
      sessionId?: string;
      agentId?: string;
      reasoning?: string;
      confidence?: number;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<LogResponse> {
    return this.log({
      sessionId: options.sessionId,
      agentId: options.agentId,
      type: "AGENT_THOUGHT",
      content: {
        thought,
        reasoning: options.reasoning,
        confidence: options.confidence,
      },
      metadata: options.metadata,
    });
  }

  /**
   * Log tool call
   */
  async logToolCall(
    tool: string,
    functionName: string,
    args: Record<string, any>,
    options: {
      sessionId?: string;
      agentId?: string;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<LogResponse> {
    return this.log({
      sessionId: options.sessionId,
      agentId: options.agentId,
      type: "TOOL_CALL",
      content: {
        tool,
        function: functionName,
        arguments: args,
      },
      metadata: options.metadata,
    });
  }

  /**
   * Log tool result
   */
  async logToolResult(
    result: any,
    status: "success" | "error",
    options: {
      sessionId?: string;
      agentId?: string;
      error?: string;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<LogResponse> {
    return this.log({
      sessionId: options.sessionId,
      agentId: options.agentId,
      type: "TOOL_RESULT",
      content: {
        result,
        status,
        error: options.error,
      },
      metadata: options.metadata,
    });
  }

  /**
   * Log agent output
   */
  async logAgentOutput(
    message: string,
    options: {
      sessionId?: string;
      agentId?: string;
      confidence?: number;
      reasoning?: string;
      metadata?: Record<string, any>;
    } = {}
  ): Promise<LogResponse> {
    return this.log({
      sessionId: options.sessionId,
      agentId: options.agentId,
      type: "AGENT_OUTPUT",
      content: {
        message,
        confidence: options.confidence,
        reasoning: options.reasoning,
      },
      metadata: options.metadata,
    });
  }

  /**
   * Create a new session
   */
  async createSession(info: Omit<SessionInfo, "sessionId"> & { sessionId?: string }): Promise<{ sessionId: string }> {
    const sessionId = info.sessionId || this.generateSessionId();
    
    try {
      await this.client.post("/api/sessions", {
        sessionId,
        ...info,
      });

      return { sessionId };
    } catch (error) {
      throw new Error(`Failed to create session: ${this.handleError(error)}`);
    }
  }

  /**
   * Set default session ID
   */
  setDefaultSession(sessionId: string): void {
    this.config.defaultSessionId = sessionId;
  }

  /**
   * Set default agent ID
   */
  setDefaultAgent(agentId: string): void {
    this.config.defaultAgentId = agentId;
  }

  /**
   * Generate a unique session ID
   */
  private generateSessionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 9);
    return `session_${timestamp}_${random}`;
  }

  /**
   * Handle and format errors
   */
  private handleError(error: unknown): string {
    if (error instanceof AxiosError) {
      return error.response?.data?.error || error.message;
    }
    return error instanceof Error ? error.message : "Unknown error";
  }
} 