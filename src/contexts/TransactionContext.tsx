import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number
  type: "income" | "outcome"
  description: string 
  category: string
  price: number
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  setTransactionsMethod: (transaction: Transaction) => void
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string){
    const response = await api.get('transactions', {
      params: {
        q: query
      }      
    })
    
    setTransactions(response.data)
  }

  function setTransactionsMethod(transaction: Transaction){
    setTransactions(state => ({...state, transaction}))
  }


  useEffect(() => {
    fetchTransactions()
  },[])

  return (<TransactionsContext.Provider value={{transactions, setTransactionsMethod, fetchTransactions}}>
    {children}
  </TransactionsContext.Provider>
)}