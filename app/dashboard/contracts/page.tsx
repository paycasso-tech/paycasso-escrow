'use client';
import React, { useState, useEffect } from 'react';
import { PageHeader } from '@/components/ui/page-header';
import { ContractsActions } from '@/components/contracts/ContractsActions';
import { ContractsFilter } from '@/components/contracts/ContractsFilter';
import { ContractsTable } from '@/components/contracts/ContractsTable';
import { ContractsSummary } from '@/components/contracts/ContractsSummary';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser-client';
import { useRouter } from 'next/navigation';
import type { EscrowAgreement } from '@/types/agreements';
import type { Contract } from '@/types/contracts';

export default function ContractsPage() {
  const [search, setSearch] = useState('');
  const [contractType, setContractType] = useState('All');
  const [contractStatus, setContractStatus] = useState('All');
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchContracts = async () => {
      setLoading(true);
      const supabase = createSupabaseBrowserClient();
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user) {
        router.push('/sign-in');
        return;
      }
      setUserEmail(user.email || '');
      // Fetch agreements where the user is either the depositor or beneficiary
      const { data, error } = await supabase
        .from('escrow_agreements')
        .select(`id, created_at, status, terms, depositor_wallet:depositor_wallet_id(profiles(name)), beneficiary_wallet:beneficiary_wallet_id(profiles(name)), transactions(amount)`) // adjust as needed
        .or(`depositor_wallet_id.eq.${user.id},beneficiary_wallet_id.eq.${user.id}`);
      if (error) {
        setContracts([]);
        setLoading(false);
        return;
      }
      const mapped = (data || []).map((agreement: any) => ({
        id: agreement.id,
        date: new Date(agreement.created_at).toLocaleDateString(),
        amount: agreement.transactions?.amount ? `${agreement.transactions.amount} USDC` : '-',
        status: agreement.status,
        counterparty: agreement.beneficiary_wallet?.profiles?.name || agreement.depositor_wallet?.profiles?.name || '-',
        purpose: agreement.terms?.tasks?.[0]?.description || '-',
      }));
      setContracts(mapped);
      setLoading(false);
    };
    fetchContracts();
  }, [router]);

  // these functions are to be moved to another dir
  const handleExportCSV = () => {};
  const handleAddNew = () => {};
  const handleFilterClick = () => {};
  const handleRetryClick = () => {};

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <PageHeader
        title="Contracts"
        userEmail={userEmail}
        actions={
          <ContractsActions
            onExportCSV={handleExportCSV}
            onAddNew={handleAddNew}
          />
        }
      />
      <div className="px-8">
        <ContractsFilter
          searchValue={search}
          onSearchChange={setSearch}
          contractType={contractType}
          onContractTypeChange={setContractType}
          contractStatus={contractStatus}
          onContractStatusChange={setContractStatus}
          onFilterClick={handleFilterClick}
          onRetryClick={handleRetryClick}
        />
        <ContractsSummary totalCount={contracts.length} />
        <ContractsTable
          contracts={contracts}
          className="mt-2"
        />
      </div>
    </div>
  );
} 