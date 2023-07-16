import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "./services/api";
import { transitions } from "polished";

export const TransactionContext = createContext<TransactionsContextDataProps>(
  {} as TransactionsContextDataProps
);

interface TransactionProps {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// interface TransactionInputProps {
//   title: string;
//   amount: number;
//   type: "deposit" | "withdraw";
//   category: string;
// }

type TransactionInputProps = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionsContextDataProps {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionInputProps) => Promise<void>;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInputProps) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
