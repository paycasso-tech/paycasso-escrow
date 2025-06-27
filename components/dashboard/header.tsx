import { User } from '@supabase/supabase-js';

interface DashboardHeaderProps {
  user: User;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <header className="h-16 border-b border-border/40 px-6 flex items-center justify-between bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="text-lg font-semibold">Welcome back, {user.email}</div>
    </header>
  );
} 