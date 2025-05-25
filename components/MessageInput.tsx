// MessageInput.tsx

import React, { useState } from "react";

interface MessageInputProps {
  chatId: string;
  senderId: string;
}

const MessageInput: React.FC<MessageInputProps> = ({ chatId, senderId }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Placeholder for sending the message logic
    console.log("Sending message:", {
      chatId,
      senderId,
      message,
    });

    setMessage(""); // Clear input after sending
  };

  return (
    <div className="flex items-center space-x-2 p-4 border-t">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border rounded px-3 py-2"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
