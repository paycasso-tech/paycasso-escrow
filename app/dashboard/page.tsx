import { redirect } from 'next/navigation';
import { createSupabaseServerComponentClient } from '@/lib/supabase/server-client';
import { StatCardsRow } from '@/components/dashboard/cards/StatCardsRow';
import { RecentTransactionsSection } from '@/components/dashboard/transactions/RecentTransactionsSection';
import { QuickActionsAndApprovalsRow } from '@/components/dashboard/cards/QuickActionsAndApprovalsRow';
import { PageHeader } from '@/components/ui/page-header';

export default async function DashboardPage() {
  const supabase = createSupabaseServerComponentClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return redirect('/sign-in');

  const { data: profile } = await supabase
    .from('profiles')
    .select('id')
    .eq('auth_user_id', user.id)
    .single();

  const { data: wallet } = await supabase
    .schema('public')
    .from('wallets')
    .select()
    .eq('profile_id', profile?.id)
    .single();

  if (!wallet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">No wallet found</h1>
        <p className="text-gray-500">Please contact support to set up your wallet.</p>
      </div>
    );
  }

  let firstName = user?.user_metadata?.full_name?.split(' ')[0];
  if (!firstName && user?.email) {
    firstName = user.email.split('@')[0];
  }

  return (
    <>
      <PageHeader
        title={`Welcome back, ${firstName || 'User'}!`}
        subtitle="Your Paycasso Escrow at a glance."
        userEmail={user.email}
      />
      <StatCardsRow user={user} profile={profile} wallet={wallet} />
      <RecentTransactionsSection user={user} profile={profile} wallet={wallet} />
      <QuickActionsAndApprovalsRow user={user} profile={profile} wallet={wallet} />
    </>
  );
}
