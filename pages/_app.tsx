import { useState } from 'react';
import { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider }  from '@supabase/auth-helpers-react';
import { SupabaseClient, Session }  from '@supabase/supabase-js';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps<{
  initialSession: Session;
  supabaseClient: SupabaseClient;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
