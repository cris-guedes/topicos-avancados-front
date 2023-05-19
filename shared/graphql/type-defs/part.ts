import { gql } from '@apollo/client'

export const partType = gql`
  type Part {
    id: String
    name: String
    email: String
    involvement: String
  }

  input InputPart {
    name: String
    email: String
    involvement: String
  }
`
