import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm(){
  const { 
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })



  function handleSearchTransactions(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" placeholder="Busque por transações" {...register('query')} />

      <button type="submit" disabled={isSubmitting}>
          <MagnifyingGlass size={28} />
          Buscar
      </button>
    </SearchFormContainer>
  )
}