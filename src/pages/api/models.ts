import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";

export const runtime = 'edge';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiKey = "test"; // (req.headers["authorization"] as string)?.split(" ")[1];
  if (!apiKey) {
    return res.status(401).json({ error: "Missing token" });
  }

  return [];
}
