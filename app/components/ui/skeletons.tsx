import { Skeleton } from "@/components/ui/skeleton"

export default function CardWrapperSkeleton() {
  return (
    <section className='w-full max-w-[1440] mx-auto p-6 flex flex-col gap-4 items-center sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>      
      <Skeleton className="w-full max-w-[330px] h-64 max-h-[350px] opacity-25 bg-zinc-700 rounded-lg"/>            
    </section>
  )
}