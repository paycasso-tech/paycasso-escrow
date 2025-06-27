'use client';
import React, { useEffect, useState } from 'react';
import { Greeting } from './Greeting';
import { Subtext } from './Subtext';
import { UserMenu } from './UserMenu';

export const TopBar: React.FC = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const getSession = async () => {
      const { createSupabaseBrowserClient } = await import('@/lib/supabase/browser-client');
      const supabase = createSupabaseBrowserClient();
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      let first = user?.user_metadata?.full_name?.split(' ')[0];
      if (!first && user?.email) {
        first = user.email.split('@')[0];
      }
      setFirstName(first || 'User');
      setEmail(user?.email || '');
    };
    getSession();
  }, []);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', marginBottom: 42, fontFamily: 'Poppins, sans-serif', marginLeft: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Greeting />
        <Subtext text="Your Paycasso Escrow at a glance." />
      </div>
      <UserMenu email={email} />
    </div>
  );
}; 