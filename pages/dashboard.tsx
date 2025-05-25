'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabaseClient';

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user }, error }) => {
      if (!user) router.push('/login');
      else setUserEmail(user.email ?? '');
    });
  }, [router]);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, <span className="text-lg">{userEmail}</span>!
      </h1>
      <div className="space-x-2">
        <button onClick={() => router.push('/chats')} className="px-4 py-2 border rounded">
          Chats
        </button>
        <button onClick={logout} className="px-4 py-2 border rounded">
          Logout
        </button>
      </div>
    </div>
  );
}
