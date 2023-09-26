import React from "react";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">ChatCloudflare</h1>
        <p className="mt-4 text-lg">
          A Chat app built with <a href="https://react.dev/">React</a>, <a href="https://nextjs.org/">Next.js</a>, <a href="https://tailwindcss.com/">Tailwind CSS</a>, and <a href="https://ai.cloudflare.com">Cloudflare Workers AI</a>.
        </p>
        <p className="p-6">Based on <a href="https://github.com/Nashex/gpt4-playground">GPT-4 Playground by Nashex</a></p>
      </div>
    </div>
  );
}
