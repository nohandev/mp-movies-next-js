import { Input } from '@/components/ui/input'

export default function Search() {
  return (
    <div className=' w-full'>
      <Input
      type='search'
      placeholder='Search by name'
      className='text-neutral-200 w-full'/>
    </div>
  )
}