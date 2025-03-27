import Logo from '@/app/components/ui/logo'
import Search from '@/app/components/search'
import CardWrapperSkeleton from '@/app/components/ui/skeletons'
import  CardWrapper  from '@/app/components/ui/cardWapper'
import { FilterByGender, FilterBySpecies, FilterByStatus } from '@/app/components/filters'
import { ParamsSchema } from '@/lib/definitions'
import { Suspense } from 'react'


export default async function Page({
  searchParams
}: {
  searchParams:Promise<ParamsSchema>
}) {

  const queryparams = await searchParams
  
  return (
    <main>
      <Logo/>
      <section className='max-w-[1440px] mx-auto px-6 flex flex-col gap-4 justify-center items-center sm:grid sm:grid-cols-4'>
        <Search/>
        <FilterBySpecies/>
        <FilterByGender/>
        <FilterByStatus/>
      </section>
      <Suspense fallback={<CardWrapperSkeleton/>}>
        <CardWrapper queryParams={queryparams}/>
      </Suspense>
    </main>
  );
}
