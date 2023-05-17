import { gql } from '@apollo/client'

export const vehicleType = gql`
  type Vehicle {
    id: String
    anoFabricacao: String
    cor: String
    fabricante: String
    tipoVeiculo: String
    modelo: String
    emplacamento: CarRegistration
  }

  type Query {
    loadVehicleByColor(color: String): [Vehicle]
    loadVehicleByType(type: String): [Vehicle]
    loadVehicleByPlateNumber(plateNumber: String): Vehicle
    loadVehicles: [Vehicle]
  }
`
