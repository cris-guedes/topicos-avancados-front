export type Address = {
  id: string
  state: string
  city: string
  publicPlace: string
  neighborhood: string
  number: string
  report: string
}

export type InputAddress = {
  state: string
  city: string
  publicPlace: string
  neighborhood: string
  number: string
  report?: string
}
