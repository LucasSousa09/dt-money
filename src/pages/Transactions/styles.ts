import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    background: ${(props) => props.theme['gray-700']};
    padding: 1.25rem 2rem;

    white-space: nowrap;

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

interface PriceHightlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHightlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-700']
      : props.theme['red-700']};
`
