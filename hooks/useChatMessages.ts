import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Message } from '../types';

export function useChatMessages(chatId: string | undefined) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!chatId) {
      console.warn('No chatId provided to useChatMessages');
      return;
    }

    const fetchMessages = async () => {
      console.log('Fetching messages for chatId:', chatId);
      
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Supabase error fetching messages:', error);
      } else {
        console.log('Fetched messages:', data);
        setMessages(data || []);
      }

      setLoading(false);
    };

    fetchMessages();
  }, [chatId]);

  return { messages, loading };
}
