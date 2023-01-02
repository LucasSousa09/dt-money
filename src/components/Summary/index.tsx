import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary(){
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if(transaction.type === "income"){
        acc.income += transaction.price
        acc.total += transaction.price
      }
      if(transaction.type === "outcome"){
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }
      return acc
    }, 
    {income: 0, outcome: 0, total: 0}
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color="#00b37e" size={32} />
        </header>

        <strong> {priceFormatter.format(summary.income)} </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color="#f75a68" size={32} />
        </header>

        <strong>
          {summary.outcome > 0 && '- '}
          {priceFormatter.format(summary.outcome)} 
        </strong>
      </SummaryCard>

      <SummaryCard  variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar color="#FFF" size={32} />
        </header>

        <strong> {priceFormatter.format(summary.total)} </strong>
      </SummaryCard>

    </SummaryContainer>
  )
}