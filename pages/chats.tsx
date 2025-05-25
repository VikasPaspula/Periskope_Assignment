'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';
import ChatHeader from '../components/Header';
import MessageArea from '../components/MessageArea';
import MessageInput from '../components/MessageInput';
import Sidebar from '../components/Sidebar';
import { ChatPreview } from '../types';
import { simulateMessage } from '../utils/simulateMessages';

export default function ChatsPage() {
  const [chatList, setChatList] = useState<ChatPreview[]>([]);
  const [input, setInput] = useState('');
  const params = useSearchParams();
  const chatId = params.get('chatId') ?? ''; // Ensure string, never null

  const userId = '11111111-1111-1111-1111-111111111111';

  const fetchChats = async () => {
    const { data, error } = await supabase
      .from('chats')
      .select(`
        *,
        messages:messages!messages_chat_id_fkey(content, created_at)
      `)
      .order('created_at', { ascending: true });

    if (!data || data.length === 0) {
      setChatList([]);
      return;
    }

    const chatPreviews: ChatPreview[] = data.map((chat: any) => {
      const lastMessage = chat.messages?.[chat.messages.length - 1];
      return {
        id: chat.id,
        name: chat.name || 'Unnamed Chat',
        lastMessage: lastMessage?.content || '',
        timestamp: lastMessage?.created_at || chat.created_at,
      };
    });

    setChatList(chatPreviews);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('realtime-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          // When new message arrives, refresh chats list (to update last message)
          fetchChats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (chatList.length > 0) {
        const randomChat = chatList[Math.floor(Math.random() * chatList.length)];
        simulateMessage(randomChat.id);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [chatList]);

  const handleSend = async () => {
    if (!chatId || !input.trim()) return;

    await supabase.from('messages').insert({
      chat_id: chatId,
      content: input,
      sender_id: userId,
    });

    setInput('');
  };

  console.log('chatId from URL:', chatId);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar chats={chatList} />
      <div className="flex flex-col flex-1">
        <ChatHeader title={chatList.find((c) => c.id === chatId)?.name || '—'} />
        <MessageArea chatId={chatId} userId={userId} />
        <MessageInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}
