export type itemSelectSchema = {
  value: string
  title: string
}

type OriginAndLocationType = {
  name:string
  url:string
}

export type CharacterSchema = {
  id:number
  name:string
  status:string
  species:string
  type:string
  gender:string
  origin: OriginAndLocationType
  location: OriginAndLocationType
  image:string
  episode: string[]
  url:string
  created:string
}