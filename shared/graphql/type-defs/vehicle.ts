import { gql } from '@apollo/client'

export const vehicleType = gql`
  type Vehicle {
    id: String
    yearManufacture: String
    color: String
    brand: String
    type: String
    model: String
    registration: CarRegistration
  }

  type Query {
    loadVehicleByColor(color: String): [Vehicle]
    loadVehicleByType(type: String): [Vehicle]
    loadVehicleByPlateNumber(plateNumber: String): Vehicle
  }
`
