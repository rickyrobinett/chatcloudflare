import { useCloudflare } from "@/context/CloudflareProvider";
import React from "react";
import TextArea from "../input/TextArea";

type Props = {};

export default function SystemMessage({}: Props) {
  const { updateSystemMessage, systemMessage } = useCloudflare();

  return (
    <TextArea
      title="System"
      className="grow"
      placeholder="You are a helpful assistant."
      value={systemMessage.content}
      onChange={(e) => updateSystemMessage(e.target.value)}
    />
  );
}
