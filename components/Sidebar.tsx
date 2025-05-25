import { useRouter, useSearchParams } from 'next/navigation';
import { ChatPreview } from '../types'; // or define inline

type SidebarProps = {
  chats: ChatPreview[];
};

export default function Sidebar({ chats }: SidebarProps) {
  const router = useRouter();
  const params = useSearchParams();
  const activeChatId = params.get('chatId');

  return (
    <aside className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b font-semibold text-xl">Chats</div>
      <ul>
        {chats.length === 0 ? (
          <p className="p-4 text-gray-400">No chats available</p>
        ) : (
          chats.map((chat) => (
            <li
              key={chat.id}
              onClick={() => router.push(`/chats?chatId=${chat.id}`)}
              className={`flex items-start gap-3 px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                activeChatId === chat.id ? 'bg-gray-100' : ''
              }`}
            >
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
                {chat.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{chat.name}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage || 'No messages yet'}</p>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap">
                {new Date(chat.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </li>
          ))
        )}
      </ul>
    </aside>
  );
}
