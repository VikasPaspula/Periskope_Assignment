import React from 'react';
import { FiSend, FiPaperclip, FiCamera, FiMic } from 'react-icons/fi';
import { BsEmojiSmile } from 'react-icons/bs';
import { FaFileVideo } from 'react-icons/fa';

const MessageInput: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-3 border-t bg-white">
      {/* Emoji Icon */}
      <button type="button">
        <BsEmojiSmile className="text-2xl text-gray-600 hover:text-blue-500" />
      </button>

      {/* Attach File */}
      <button type="button">
        <FiPaperclip className="text-2xl text-gray-600 hover:text-blue-500" />
      </button>

      {/* Camera */}
      <button type="button">
        <FiCamera className="text-2xl text-gray-600 hover:text-blue-500" />
      </button>

      {/* Video */}
      <button type="button">
        <FaFileVideo className="text-2xl text-gray-600 hover:text-blue-500" />
      </button>

      {/* Microphone */}
      <button type="button">
        <FiMic className="text-2xl text-gray-600 hover:text-blue-500" />
      </button>

      {/* Message Input */}
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Send Icon */}
      <button type="button">
        <FiSend className="text-2xl text-blue-600 hover:text-blue-800" />
      </button>
    </div>
  );
};

export default MessageInput;
