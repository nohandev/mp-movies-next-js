'use client'

import { Input } from '@/components/ui/input'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'




export default function Search() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchparams = useSearchParams()
  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const inputValue = e.target as HTMLFormElement
    const params = new URLSearchParams(searchparams)
    
    if(inputValue.search.value) {
      params.set('name', inputValue.search.value)
    } else {
      params.delete('name')
    }

    replace(`${pathname}?${params.toString()}`, {scroll:false})
  }
  return (
    <form className=' w-full' onSubmit={handleSubmit}>
      <Input
      type='search'
      name='search'
      placeholder='Search by name'
      className='text-neutral-200 w-full'/>
    </form>
  )
}