import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary(){
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color="#00b37e" size={32} />
        </header>

        <strong> R$ 17.400,00 </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color="#f75a68" size={32} />
        </header>

        <strong> R$ 17.400,00 </strong>
      </SummaryCard>

      <SummaryCard  variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar color="#FFF" size={32} />
        </header>

        <strong> R$ 17.400,00 </strong>
      </SummaryCard>

    </SummaryContainer>
  )
}