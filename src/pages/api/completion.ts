import type { NextApiRequest, NextApiResponse } from "next";
import { defaultConfig, getCloudflareCompletion } from "@/utils/Cloudflare";
import { CloudflareRequest } from "@/utils/Cloudflare";

export const config = {
  runtime: "edge",
};

interface Response {
  content?: string;
  error?: string;
}

export default async function handler(
  req: Request,
  res: NextApiResponse<Response>
) {
  const {
    model,
    max_tokens,
    temperature,
    top_p,
    frequency_penalty,
    presence_penalty,
    messages,
  } = await req.json();

  if (!messages) {
    return new Response("Missing messages", { status: 400 });
  }

  const token = "test";// req.headers.get("Authorization")?.split(" ")[1];
  /*if (!token) {
    return new Response("Missing token", { status: 401 });
  }*/

  const config = {
  };

  const payload: CloudflareRequest = {
    ...config,
    messages,
  };

  try {
    const stream = await getCloudflareCompletion(token, payload);
    return new Response(stream);
  } catch (e: any) {
    return new Response(e.message || "Error fetching response.", {
      status: 500,
    });
  }
}
