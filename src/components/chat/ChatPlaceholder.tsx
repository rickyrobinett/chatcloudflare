import React from "react";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">ChatCloudflare</h1>
        <p className="mt-4 text-lg">
          A ChatGPT clone built with React, Next.js, TailwindCSS, and Cloudflare Workers AI.
        </p>
        <p className="p-6">Based on <a href="https://github.com/Nashex/gpt4-playground">GPT-4 Playground by Nashex</a></p>
      </div>
    </div>
  );
}
