import Logo from '@/app/components/ui/logo'
import Search from '@/app/components/search'
import { FilterByGender, FilterBySpecies, FilterByStatus } from '@/app/components/filters'
import  CardWrapper  from '@/app/components/ui/cardWapper'
import { fetchAllCharacters } from '@/lib/data'

export default async function Home() {

  const data = await fetchAllCharacters()

  const results = data.results

  return (
    <main>
      <Logo/>

      <section className='max-w-[1440px] mx-auto px-6 flex flex-col gap-4 justify-center items-center sm:grid sm:grid-cols-4'>
        <Search/>
        <FilterBySpecies/>
        <FilterByGender/>
        <FilterByStatus/>
      </section>

      <CardWrapper data={results}/>
    </main>
  );
}
