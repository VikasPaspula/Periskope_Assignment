// ✅ types/index.ts
export interface Chat {
  id: string;
  name: string;
  is_group?: boolean;
  created_at: string;
}

export interface Message {
  id: string;
  chat_id: string;
  sender_id: string;
  content: string;
  created_at: string;
  sender_name?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
}

export interface ChatPreview {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
}
