import React from 'react';
import { Message } from '../types';

type Props = {
  message: Message;
  isOwn: boolean;
};

const MessageItem: React.FC<Props> = ({ message, isOwn }) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg shadow ${
          isOwn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        <div>{message.content}</div>
      </div>
    </div>
  );
};

export default MessageItem;
