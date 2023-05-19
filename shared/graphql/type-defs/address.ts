import { gql } from '@apollo/client'

export const addressType = gql`
  type Address {
    id: String
    state: String
    city: String
    publicPlace: String
    neighborhood: String
    number: String
    report: String
  }

  input InputAddress {
    state: String
    city: String
    publicPlace: String
    neighborhood: String
    number: String
    report: String
  }
`
