import { useCloudflare } from "@/context/CloudflareProvider";
import Link from "next/link";
import React from "react";
import { MdChatBubbleOutline } from "react-icons/md";

type Props = {};

export default function Header({}: Props) {
  const { conversationId } = useCloudflare();

  return (
    <div className="z-50 flex h-[60px] flex-row items-center justify-between border-b border-gray-300 bg-white px-4">
      <span className="text-lg font-bold">Playground</span>

      <div className="flex flex-row gap-x-4">
        <Link
          href={conversationId ? "/chat/" + conversationId : "/"}
          className="flex items-center gap-x-1 rounded border border-gray-300 p-4 text-gray-700 hover:bg-gray-200"
        >
          <MdChatBubbleOutline />
        </Link>
      </div>
    </div>
  );
}
