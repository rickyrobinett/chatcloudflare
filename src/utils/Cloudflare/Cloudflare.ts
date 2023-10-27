import { CloudflareChatMessage} from "./Cloudflare.types";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

export const defaultConfig = {
};

export type CloudflareRequest = {
  messages: CloudflareChatMessage[];
};

export const getCloudflareCompletion = async (
  token: string,
  payload: CloudflareRequest
) => {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  const account_id = process.env.CLOUDFLARE_ACCOUNT_ID;
  const api_key = process.env.CLOUDFLARE_API_KEY
  
  const json = JSON.stringify({messages:  payload.messages, stream: true});

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${account_id}/ai/run/@cf/meta/llama-2-7b-chat-int8`,
    {
      headers: { Authorization: `Bearer ${api_key}` },
      method: "POST",
      body: json,
    }
  );

  // Check for errors
  if (!response.ok) {
    const error = await response.text();
    console.log(error)
    throw new Error(error);
  }

  console.log("start streaming");
  let counter = 0;
  const stream = new ReadableStream({
    async start(controller) {
      function onParse(event: ParsedEvent | ReconnectInterval) {
        if (event.type === "event") {
          const data = event.data;
          // https://beta.openai.com/docs/api-reference/completions/create#completions/create-stream
          if (data === "[DONE]") {
            controller.close();
            return;
          }

          try {
            console.log(data);
            const json = JSON.parse(data);
            console.log(json);
            const text = json.response || "";
            if (counter < 2 && (text.match(/\n/) || []).length) {
              return;
            }
            const queue = encoder.encode(text);
            controller.enqueue(queue);
            counter++;
          } catch (e) {
            controller.error(e);
          }
        }
      }

      const parser = createParser(onParse);
      for await (const chunk of response.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });
  
  return stream;
};