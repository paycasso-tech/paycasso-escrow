'use client';
import React from 'react';
import { Greeting } from './Greeting';
import { Subtext } from './Subtext';
import { UserMenu } from './UserMenu';

export const TopBar: React.FC<{ user: any; profile: any; wallet: any }> = ({ user }) => {
  let firstName = user?.user_metadata?.full_name?.split(' ')[0];
  if (!firstName && user?.email) {
    firstName = user.email.split('@')[0];
  }
  const email = user?.email || '';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '95%', marginBottom: 42, fontFamily: 'Poppins, sans-serif', marginLeft: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Greeting name={firstName || 'User'} />
        <Subtext text="Your Paycasso Escrow at a glance." />
      </div>
      <UserMenu email={email} />
    </div>
  );
}; 