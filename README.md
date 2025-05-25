Project view (Screenshots)

Login:
![Screenshot 2025-05-26 004123](https://github.com/user-attachments/assets/d4649886-6a4f-46c1-9941-ba18f86c4588)

Sending Magic Link:

![Screenshot 2025-05-26 004154](https://github.com/user-attachments/assets/cb566162-a4d8-4412-8bc7-ef3eb8d7a656)

Authentication:

![Screenshot 2025-05-26 004226](https://github.com/user-attachments/assets/9b4ace1a-a190-4151-9b2b-1a6d6cdd3770)

Dashboard After Login:

![Screenshot 2025-05-26 004250](https://github.com/user-attachments/assets/57e57b5d-3012-4189-86af-13aa0c2c365d)

Chats:

![Screenshot 2025-05-26 004335](https://github.com/user-attachments/assets/1197e012-134d-4be0-81bb-ecee4e3c6f15)

![Screenshot 2025-05-26 004349](https://github.com/user-attachments/assets/23620a79-6ebd-4e0f-a34f-78ca6aead6ac)

![Screenshot 2025-05-26 004405](https://github.com/user-attachments/assets/a9c7b769-abe4-4422-a91c-a3e4e43ed6a8)

![Screenshot 2025-05-26 004434](https://github.com/user-attachments/assets/9f4de20c-98d8-4224-8f83-3ef9ce11e153)

![Screenshot 2025-05-26 004450](https://github.com/user-attachments/assets/ead3025c-e4ce-476c-a024-b4bc714a0a71)

![Screenshot 2025-05-26 004507](https://github.com/user-attachments/assets/4b824da5-8fd7-41eb-9e08-1f29b31ba10f)


# Periskope Chat Application

A full-stack real-time chat application built with [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), and [Supabase](https://supabase.com/) as part of the Periskope SDE-1 recruitment assignment.

## 🚀 Features

- 🔐 **Magic Link Authentication** using Supabase Auth  
- 💬 **Real-time Chat** with WebSocket-style updates  
- 🧑‍🤝‍🧑 **One-on-One Messaging**  
- 📸 **Media Support** (Images, Videos)  
- 🧠 **Responsive UI** inspired by WhatsApp  
- 🗃️ Supabase Tables:
  - `users`
  - `chats`
  - `chat_members`
  - `messages`

## 📦 Tech Stack

- **Frontend**: Next.js + TypeScript  
- **Styling**: TailwindCSS  
- **Backend**: Supabase (Database, Auth, Realtime)  
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)  
- **Deployment**: [Vercel](https://vercel.com)

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/periskope-chat.git
cd periskope-chat

2. Install Dependencies

npm install
# or
yarn install

3. Set up Environment Variables
Create a .env.local file in the root:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


4. Run Locally

npm run dev

Open http://localhost:3000 in your browser.

🗂️ Project Structure

.
├── pages/              # Next.js routes
│   ├── index.tsx       # Login page
│   └── dashboard.tsx   # Chat dashboard
├── lib/                # Supabase client and helpers
├── components/         # Reusable UI components
├── public/             # Static assets (e.g., icons)
├── styles/             # Tailwind and custom styles
└── .env.local          # Environment variables


 Key Functionalities
Login: Email-based login with magic link authentication.

Dashboard: List of active chats and quick navigation.

Chats: Real-time messaging interface.

Media Support: Upload and send images/videos in chats.

.

🔧 Optional (Bonus) Features (If Implemented)
Chat filters and search functionality

Assign members and labels to chats

Group chat feature

Offline support using IndexedDB

Semantic HTML for accessibility

 Deployment
Deployed on Vercel

 Live Demo: https://your-vercel-deployment-url































