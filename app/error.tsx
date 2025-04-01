'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MoveLeft } from "lucide-react"

export default function Error({
  reset
}: {
  reset: () => void
}) {

  return (
    <div className='max-w-[450px] mx-auto mt-6'>
      <Image 
      src='/error.png'
      alt='Error image'
      width={523}
      height={311}
      priority={false}
      className="w-auto h-auto"/>
      <div className='flex flex-col items-center mt-4 gap-2'>
        <h2 className='text-neutral-300 text-2xl text-center'>Estamos enfrentando um problema de conexão, tente novamente em alguns segundos</h2>
        <Button variant='outline' onClick={() => reset()}>
          <MoveLeft /> Voltar
        </Button>
      </div>
    </div>
  )
}