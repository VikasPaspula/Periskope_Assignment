import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Message } from "@/types";
import MessageInput from "@/components/MessageInput";
import MessageItem from "@/components/MessageItem";

export default function ChatPage() {
  const router = useRouter();
  const { chatId } = router.query;

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // TEMP: Mock user id (replace with Supabase user ID)
  const currentUserId = "user-123";

  useEffect(() => {
    if (!chatId || typeof chatId !== "string") return;

    const fetchMessages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("chat_id", chatId)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        setError("Failed to load messages.");
      } else {
        setMessages(data as Message[]);
      }

      setLoading(false);
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div className="flex flex-col h-screen">
      <div className="p-4 border-b text-2xl font-bold">Live Chat</div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {loading && <p>Loading messages...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && messages.length === 0 && <p>No messages yet.</p>}
        {!loading &&
          messages.map((msg) => (
            <MessageItem
              key={msg.id}
              message={msg}
              isOwn={msg.sender_id === currentUserId}
            />
          ))}
      </div>

      <div className="border-t p-4">
        {chatId && typeof chatId === "string" && (
          <MessageInput chatId={chatId} senderId={currentUserId} />
        )}
      </div>
    </div>
  );
}
