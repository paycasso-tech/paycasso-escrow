"use client";
import { useState } from "react";

export interface UseWalletBalanceResult {
  balance: number;
  loading: boolean;
  refreshBalance: () => Promise<void>;
}

export function useWalletBalance(walletId: string): UseWalletBalanceResult {
  // Minimal implementation for now
  return { balance: 0, loading: false, refreshBalance: async () => {} };
}