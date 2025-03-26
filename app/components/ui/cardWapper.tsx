import { CharacterSchema } from '@/lib/definitions'
import Image from 'next/image'

type TypeData = {
  data: CharacterSchema[]
}

export default function CardWrapper({ data }: TypeData) {
  

  return (
    <section className='w-full max-w-[1440] mx-auto p-6 flex flex-col gap-4 character-center sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {data.map((character: CharacterSchema) => (
        <div key={character.id} className='border border-white rounded-lg w-full'>
        <div className='overflow-hidden'>
          <Image
            src={character.image}
            alt='character Image'
            width={300}
            height={300}
            priority={character.id === 1 ? true : false}
            className='object-cover aspect-3/2 rounded-t-lg h-auto w-full'/>
        </div>
        <div className='p-4'>
          <h2 className='text-neutral-300 text-[clamp(26px,2vw,32px)] font-[600]'>{character.name}</h2>
          <p className='text-neutral-300 text-[clamp(18px,1.5vw,28px)] font-[400]'>{character.species}</p>
        </div>
      </div>
      ))}
      
    </section>
  )
}

