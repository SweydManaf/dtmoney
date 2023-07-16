import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { transitions } from "polished";

export const TransactionContext = createContext<TransactionProps[]>([]);

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: "deposit" | "withdraw";
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
}
