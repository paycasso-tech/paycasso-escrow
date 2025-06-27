'use client';
import React from 'react';

export const Greeting: React.FC<{ name: string }> = ({ name }) => (
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