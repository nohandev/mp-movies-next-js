'use client'

import { Input } from '@/components/ui/input'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'



export default function Search() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchparams = useSearchParams()
  
  const handleChange = useDebouncedCallback(
    (e:React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchparams)
    
    if(e.target.value) {
      params.set('name', e.target.value)
    } else {
      params.delete('name')
    }

    replace(`${pathname}?${params.toString()}`, {scroll:false})
  }, 1300
)

  return (
    <div className=' w-full'>
      <Input
      onChange={handleChange}
      type='search'
      placeholder='Search by name'
      className='text-neutral-200 w-full'/>
    </div>
  )
}