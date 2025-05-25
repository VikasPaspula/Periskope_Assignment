import { useRouter } from 'next/router';
import { useChatMessages } from '../hooks/useChatMessages';
import MessageItem from './MessageItem';

const currentUserId = '9b97dbea-1671-49c6-b7ed-60d33ce67665'; // 👈 Use your actual logged-in user id

const MessageArea = () => {
  const router = useRouter();
  const { chatId } = router.query;

  const { messages, loading } = useChatMessages(chatId as string);

  if (loading) return <p>Loading messages...</p>;

  if (!messages.length) return <p>No messages yet in this chat</p>;

  return (
    <div>
      {messages.map((msg) => (
        <MessageItem
          key={msg.id}
          message={msg}
          isOwn={msg.sender_id === currentUserId}
        />
      ))}
    </div>
  );
};

export default MessageArea;
