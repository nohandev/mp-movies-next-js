import CardWrapperSkeleton from '@/app/components/ui/skeletons'
import  CardWrapper  from '@/app/components/ui/cardWapper'
import { ParamsSchema } from '@/lib/definitions'
import { Suspense } from 'react'

export default async function Page({
  searchParams
}: {
  searchParams:Promise<ParamsSchema>
}) {

  const queryparams = await searchParams
  
  return (
    <Suspense fallback={<CardWrapperSkeleton/>}>
      <CardWrapper queryParams={queryparams}/>
    </Suspense>
  )
}
