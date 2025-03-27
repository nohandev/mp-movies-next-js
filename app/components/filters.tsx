'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { itemSelectSchema } from '@/lib/definitions'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'

function FilterBySpecies() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const ItemsSelect = [
    { value: 'all', title: 'Todos' },
    { value: 'human', title: 'Humano' },
    { value: 'alien', title: 'Alienígena' },
    { value: 'humanoid', title: 'Humanoide' },
    { value: 'unknown', title: 'Desconhecido' },
    { value: 'poopybutthole', title: 'Poopybutthole' },
    { value: 'mythological creature', title: 'Criatura Mitológica' },
    { value: 'animal', title: 'Animal' },
    { value: 'robot', title: 'Robô' },
    { value: 'cronenberg', title: 'Cronenberg' },
  ]

  const handleChange = (e: string) => {
    const params = new URLSearchParams(searchParams)

    if (e === 'all') {
      params.delete('species')
    } else {
      params.set('species', e)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className=' w-full'>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='text-neutral-300 w-full'>
          <SelectValue placeholder='Espécie' />
        </SelectTrigger>
        <SelectContent>
          {ItemsSelect.map((item: itemSelectSchema, index) => (
            <SelectItem
              value={item.value}
              key={index}
              className='cursor-pointer'>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function FilterByGender() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const ItemsSelect = [
    { value: 'all', title: 'Todos' },
    { value: 'female', title: 'Feminino' },
    { value: 'male', title: 'Masculino' },
    { value: 'genderless', title: 'Sem Gênero' },
    { value: 'unknown', title: 'Desconhecido' }
  ]

  const handleChange = (e: string) => {
    const params = new URLSearchParams(searchParams)

    if (e === 'all') {
      params.delete('gender')
    } else {
      params.set('gender', e)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div  className='w-full'>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='text-neutral-300 w-full'>
          <SelectValue placeholder='Gênero' />
        </SelectTrigger>
        <SelectContent>
          {ItemsSelect.map((item: itemSelectSchema, index) => (
            <SelectItem
              value={item.value}
              key={index}
              className='cursor-pointer'>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

function FilterByStatus() {

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const ItemsSelect = [
    { value: 'all', title: 'Todos' },
    { value: 'alive', title: 'Vivo' },
    { value: 'dead', title: 'Morto' },
    { value: 'unknown', title: 'Status Desconhecido' }
  ]

  const handleChange = (e: string) => {
    const params = new URLSearchParams(searchParams)

    if (e === 'all') {
      params.delete('status')
    } else {
      params.set('status', e)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className=' w-full'>
      <Select onValueChange={handleChange}>
        <SelectTrigger className='text-neutral-300 w-full'>
          <SelectValue placeholder='Status' />
        </SelectTrigger>
        <SelectContent>
          {ItemsSelect.map((item: itemSelectSchema, index) => (
            <SelectItem
              value={item.value}
              key={index}
              className='cursor-pointer'>
              {item.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export { FilterBySpecies, FilterByGender, FilterByStatus }