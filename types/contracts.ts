export type Contract = {
  id: string;
  date: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Disputed';
  counterparty: string;
  purpose: string;
};

export interface ContractsTableProps {
  contracts: Contract[];
  className?: string;
  style?: React.CSSProperties;
} 