export interface CloudflareChatMessage {
  id?: number;
  role: "system" | "assistant" | "user";
  content: string;
}

export interface CloudflareSystemMessage {
  role: "system";
  content: string;
}

export interface CloudflareConfig {
}