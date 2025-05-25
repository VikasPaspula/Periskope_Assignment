type Props = {
  message: {
    content: string;
    sender_id: string;
    created_at: string;
  };
};

export default function ChatItem({ message }: Props) {
  const isMe = message.sender_id === 'user_1';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 rounded-xl max-w-md ${isMe ? 'bg-green-100 text-right' : 'bg-white text-left'} shadow`}>
        <p className="text-sm">{message.content}</p>
        <p className="text-xs text-gray-400">{new Date(message.created_at).toLocaleTimeString()}</p>
      </div>
    </div>
  );
}
