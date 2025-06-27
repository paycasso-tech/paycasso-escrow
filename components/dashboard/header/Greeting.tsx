'use client';
import React, { useEffect, useState } from 'react';

export const Greeting: React.FC = () => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const getSession = async () => {
      const { createSupabaseBrowserClient } = await import('@/lib/supabase/browser-client');
      const supabase = createSupabaseBrowserClient();
      const { data: { session } } = await supabase.auth.getSession();
      // Try to get first name from user_metadata or fallback to email
      const user = session?.user;
      let firstName = user?.user_metadata?.full_name?.split(' ')[0];
      if (!firstName && user?.email) {
        firstName = user.email.split('@')[0];
      }
      setName(firstName || 'User');
    };
    getSession();
  }, []);

  return (
    <h1
      style={{
        width: 388,
        height: 48,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600,
        fontSize: 32,
        lineHeight: '100%',
        letterSpacing: 0,
        color: '#fff',
        margin: 0,
      }}
      className="truncate"
    >
      Welcome Back, {name}!
    </h1>
  );
}; 