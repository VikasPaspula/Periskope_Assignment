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


✨ Key Functionalities
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

🛠️ Deployment
Deployed on Vercel

🔗 Live Demo: https://your-vercel-deployment-url

👤 Author
Vikas Paspula

Built with ❤️ for the Periskope SDE-1 opportunity


Login:

![Screenshot 2025-05-26 004123](https://github.com/user-attachments/assets/ebcbede8-3f35-434b-9d42-f6f10530565f)

Sending Magic Link:

![Screenshot 2025-05-26 004154](https://github.com/user-attachments/assets/bada62c4-1db1-4fa7-8bca-5d57627a9655)

Authentication:

![Screenshot 2025-05-26 004226](https://github.com/user-attachments/assets/07b8a23e-edda-4b9d-8423-9aa7885509d1)

Welcome Dashboard:

![Screenshot 2025-05-26 004250](https://github.com/user-attachments/assets/c9746f91-f95c-4187-8c81-227069306aee)

Live Chats:

![Screenshot 2025-05-26 004335](https://github.com/user-attachments/assets/59871e09-200d-4fcf-81e7-52ac3e8e66cd)

![Screenshot 2025-05-26 004349](https://github.com/user-attachments/assets/985e40e4-6ace-4dd8-9f30-785423c333ef)

![Screenshot 2025-05-26 004405](https://github.com/user-attachments/assets/dfa487f5-fd09-4cc7-893e-130ce58a7743)

![Screenshot 2025-05-26 004434](https://github.com/user-attachments/assets/6e5ec0da-ba3a-4f40-bbe1-dba9ff17d7b3)

![Screenshot 2025-05-26 004450](https://github.com/user-attachments/assets/f6012817-7270-4316-b727-6c1c10599e4a)

![Screenshot 2025-05-26 004507](https://github.com/user-attachments/assets/d52197a9-a5e7-40d1-b12f-cfe6b55f352a)










