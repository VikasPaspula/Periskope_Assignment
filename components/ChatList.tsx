// components/ChatList.tsx
import { useRouter } from 'next/router';

export type ChatPreview = {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
};

type ChatListProps = {
  chats: ChatPreview[];
};

export default function ChatList({ chats }: ChatListProps) {
  const router = useRouter();
  return (
    <aside className="w-72 bg-white border-r h-screen overflow-y-auto">
      <div className="p-4 text-xl font-semibold border-b">Chats</div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => router.push(`/chats?chatId=${chat.id}`)}
          className="p-4 hover:bg-gray-100 cursor-pointer border-b"
        >
          <div className="font-medium">{chat.name}</div>
          <div className="text-sm text-gray-500 truncate">
            {chat.lastMessage}
          </div>
        </div>
      ))}
    </aside>
  );
}
