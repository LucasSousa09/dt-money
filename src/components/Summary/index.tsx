import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useSummary } from '../../hooks/useSummary'
import { priceFormatter } from '../../utils/formatter'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const { income, outcome, total } = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color="#00b37e" size={32} />
        </header>

        <strong> {priceFormatter.format(income)} </strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color="#f75a68" size={32} />
        </header>

        <strong>
          {outcome > 0 && '- '}
          {priceFormatter.format(outcome)}
        </strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar color="#FFF" size={32} />
        </header>

        <strong> {priceFormatter.format(total)} </strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
