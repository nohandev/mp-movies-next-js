export async function fetchAllCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character')

  return response.json()
}