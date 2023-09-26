import ChatMessages from "@/components/chat/ChatMessages";
import ChatSidebar from "@/components/chat/sidebar/ChatSidebar";
import Head from "next/head";
import React, { useEffect } from "react";
import { useCloudflare } from "@/context/CloudflareProvider";
import ChatHeader from "@/components/chat/ChatHeader";

export default function Chat() {
  const { clearConversation } = useCloudflare();

  useEffect(() => {
    clearConversation();
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>ChatCloudflare</title>
        <meta name="description" content="A clone of OpenAI playground." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen relative h-screen max-h-screen w-screen overflow-hidden">
        <ChatHeader />
        <ChatMessages />
        <ChatSidebar />
      </div>
    </React.Fragment>
  );
}
