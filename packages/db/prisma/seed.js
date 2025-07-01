"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var user, session, events, _i, events_1, event_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("🌱 Seeding database...");
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: "demo@agentlog.dev",
                                name: "Demo User",
                                apiKey: "al_demo_key_123456789",
                            },
                        })];
                case 1:
                    user = _a.sent();
                    console.log("Created user:", user.email);
                    return [4 /*yield*/, prisma.session.create({
                            data: {
                                sessionId: "demo-session-001",
                                userId: user.id,
                                title: "Demo AI Agent Session",
                                description: "A sample session showing different types of agent events",
                            },
                        })];
                case 2:
                    session = _a.sent();
                    console.log("Created session:", session.sessionId);
                    events = [
                        {
                            sessionId: session.sessionId,
                            agentId: "assistant-001",
                            type: "USER_INPUT",
                            content: { message: "Hello, can you help me analyze some data?" },
                            metadata: { source: "web" },
                        },
                        {
                            sessionId: session.sessionId,
                            agentId: "assistant-001",
                            type: "AGENT_THOUGHT",
                            content: {
                                thought: "The user wants data analysis help. I should ask for more details about the data."
                            },
                            metadata: { reasoning: "clarification_needed" },
                        },
                        {
                            sessionId: session.sessionId,
                            agentId: "assistant-001",
                            type: "TOOL_CALL",
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
                            type: "TOOL_RESULT",
                            content: {
                                result: ["sales_data.csv", "user_behavior.json", "market_trends.xlsx"],
                                status: "success",
                            },
                            metadata: { execution_time_ms: 150 },
                        },
                        {
                            sessionId: session.sessionId,
                            agentId: "assistant-001",
                            type: "AGENT_OUTPUT",
                            content: {
                                message: "I can help you analyze data! I found 3 available datasets: sales_data.csv, user_behavior.json, and market_trends.xlsx. Which one would you like to explore?",
                            },
                            metadata: { confidence: 0.95 },
                        },
                    ];
                    _i = 0, events_1 = events;
                    _a.label = 3;
                case 3:
                    if (!(_i < events_1.length)) return [3 /*break*/, 7];
                    event_1 = events_1[_i];
                    return [4 /*yield*/, prisma.memoryEvent.create({ data: event_1 })];
                case 4:
                    _a.sent();
                    // Add small delay to ensure different timestamps
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 10); })];
                case 5:
                    // Add small delay to ensure different timestamps
                    _a.sent();
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 3];
                case 7:
                    console.log("Created ".concat(events.length, " sample events"));
                    console.log("✅ Database seeded successfully!");
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
