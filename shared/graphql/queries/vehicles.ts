import { gql } from '@apollo/client'

export const LOAD_VEHICLES = gql`
  query LoadVehicles {
    loadVehicles {
      anoFabricacao
      cor
      emplacamento {
        id
        city
        plate
        state
      }
      fabricante
      id
      modelo
      tipoVeiculo
    }
  }
`
export const LOAD_VEHICLES_BY_COLOR = gql`
  query LoadVehicleByColor($color: String) {
    loadVehicleByColor(color: $color) {
      anoFabricacao
      cor
      emplacamento {
        id
        plate
        state
        city
      }
      fabricante
      id
      modelo
      tipoVeiculo
    }
  }
`

export const LOAD_VEHICLES_BY_PLATE_NUMBER = gql`
  query LoadVehicleByPlateNumber($plateNumber: String) {
    loadVehicleByPlateNumber(plateNumber: $plateNumber) {
      anoFabricacao
      cor
      emplacamento {
        id
        plate
        state
        city
      }
      fabricante
      id
      modelo
      tipoVeiculo
    }
  }
`

export const LOAD_VEHICLES_BY_TYPE = gql`
  query LoadVehicleByPlateNumber($plateNumber: String) {
    loadVehicleByPlateNumber(plateNumber: $plateNumber) {
      id
      anoFabricacao
      cor
      fabricante
      tipoVeiculo
      modelo
      emplacamento {
        id
        plate
        state
        city
      }
    }
  }
`
