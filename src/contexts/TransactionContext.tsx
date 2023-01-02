import { createContext, ReactNode, useEffect, useState } from "react";

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
    const url = new URL('http://localhost:3333/transactions')

    if(query){
      url.searchParams.append('q', query)
    }


    const response = await fetch(url)
    const data = await response.json()
    
    setTransactions(data)
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