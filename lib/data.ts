import { ParamsSchema } from "./definitions"

export async function fetchCharacters(params?:ParamsSchema) {

const queryParams = params ? `?${new URLSearchParams(params)}` : ''
 try {
  const response = await fetch(`https://rickandmortyapi.com/api/character${queryParams}`)

  if (!response.ok) {
    throw new Error('Não foi possível obter os dados')
  }

  return response.json()
  } catch(error) {
    console.error(error)
  }
}