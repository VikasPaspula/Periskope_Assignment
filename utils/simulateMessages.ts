// utils/simulateMessages.ts

import { faker } from '@faker-js/faker';
import { supabase } from '../lib/supabaseClient';

export async function simulateMessage(chatId: string) {
  console.log('🧪 simulateMessage() called for chat:', chatId);

  const userIds = [
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222',
  ];

  const sender_id = faker.helpers.arrayElement(userIds);
  const content = faker.lorem.sentence();

  const { error } = await supabase.from('messages').insert({
    chat_id: chatId,
    sender_id,
    content,
  });

  if (error) {
    console.error('❌ Failed to insert fake message:', error.message);
  } else {
    console.log(`📨 Fake message inserted: ${content}`);
  }
}

