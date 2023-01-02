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
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions(){
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()
    
    setTransactions(data)
  }

  function setTransactionsMethod(transaction: Transaction){
    setTransactions(state => ({...state, transaction}))
  }


  useEffect(() => {
    loadTransactions()
  },[])

  return (<TransactionsContext.Provider value={{transactions, setTransactionsMethod}}>
    {children}
  </TransactionsContext.Provider>
)}