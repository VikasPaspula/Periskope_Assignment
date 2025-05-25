// components/ChatHeader.tsx
import { AiOutlineMenu } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

type ChatHeaderProps = {
  title: string;
};

export default function ChatHeader({ title }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center space-x-3">
        <AiOutlineMenu size={24} />
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <button>
        <BsThreeDotsVertical size={20} />
      </button>
    </header>
  );
}
