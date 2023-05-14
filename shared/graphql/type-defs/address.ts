import { gql } from '@apollo/client'

export const addressType = gql`
  type Adresss {
    id: String
    state: String
    city: String
    publicPlace: String
    neighborhood: String
    number: String
    report: String
  }
`
