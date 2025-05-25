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




























