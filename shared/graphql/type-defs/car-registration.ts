import { gql } from '@apollo/client'

export const CarRegistrationType = gql`
  type CarRegistration {
    id: String
    plate: String
    state: String
    city: String
    vehicle: Vehicle
  }

  input InputCarRegistration {
    plate: String
    state: String
    city: String
    vehicle: String
  }
`