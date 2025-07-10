'use client';
import React from 'react';

export const Greeting: React.FC<{ name: string }> = ({ name }) => (
  <h1 className="truncate w-[388px] h-12 font-poppins font-semibold text-3xl leading-none tracking-tight text-white m-0">
    Welcome Back, {name}!
  </h1>
); 