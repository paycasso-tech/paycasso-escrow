import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createSupabaseServerComponentClient } from '@/lib/supabase/server-client';
import { StatCardsRow } from '@/components/dashboard/cards/StatCardsRow';
import { RecentTransactionsSection } from '@/components/dashboard/transactions/RecentTransactionsSection';
import { QuickActionsAndApprovalsRow } from '@/components/dashboard/cards/QuickActionsAndApprovalsRow';
import { TopBar } from '@/components/dashboard/header/TopBar';

export default async function DashboardPage() {
  const supabase = createSupabaseServerComponentClient({ cookies });
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect('/sign-in');
  return (
    <>
      <TopBar />
      <StatCardsRow />
      <RecentTransactionsSection />
      <QuickActionsAndApprovalsRow />
    </>
  );
}
