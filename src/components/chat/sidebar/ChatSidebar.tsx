import Link from "next/link";
import React from "react";
import { MdAdd, MdDeleteOutline, MdBuild } from "react-icons/md";
import { useCloudflare } from "@/context/CloudflareProvider";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";

type Props = {};

export default function ChatSidebar({}: Props) {
  const { clearConversations } = useCloudflare();

  return (
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[260px]">
      <div className="flex h-full flex-col items-stretch p-2">
        <Link
          href="/"
          className="flex items-center gap-3 rounded border border-white/20 p-4 transition-colors hover:bg-gray-500/10"
        >
          <MdAdd />
          New chat
        </Link>

        <Conversations />

        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2">
          <Link
            className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
            href="/playground"
          >
            <MdBuild />
            Playground
          </Link>
          <ButtonContainer onClick={clearConversations}>
            <MdDeleteOutline />
            Clear Conversations
          </ButtonContainer>

          <ThemeButton />
        </div>

        <Github />
      </div>
    </div>
  );
}
