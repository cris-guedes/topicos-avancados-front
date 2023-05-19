import { Vehicle } from '../../domain/entities/vehicle'
import httpCoreApiProvider from './config/axios'
import resourses from './config/resourses'

class VehicleService {

  async createVehicle(params: VehicleService.createVehicle) {
    const {data} = await httpCoreApiProvider.post(
      `${resourses.vehicle}`,
      params
    )
    return data
  }

  async loadVehicles(): Promise<Vehicle[]> {
    try {
      const { data, request } = await httpCoreApiProvider.get(resourses.vehicle)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  async loadVehicleById(params: VehicleService.loadById): Promise<Vehicle> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.vehicle}/${params.id}`
    )
    return data
  }

  async loadVehiclesByColor(
    params: VehicleService.loadByColor
  ): Promise<Vehicle[]> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.vehicle}?cor=${params.color}`
    )
    return data
  }

  async loadVehiclesByType(
    params: VehicleService.loadByType
  ): Promise<Vehicle[]> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.vehicle}?tipo=${params.type}`
    )
    return data
  }

  async loadVehiclesByPlateNumber(
    params: VehicleService.loadByPlateNumber
  ): Promise<Vehicle[]> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.vehicle}?placa=${params.plate}`
    )
    return data
  }

  async updateVehicle(params: VehicleService.updateVehicle) {
    const {data} = await httpCoreApiProvider.put(
      `${resourses.vehicle}/${params.id}`,
      params
    )
    return data
  }

  async deleteVehicle(params: VehicleService.deleteById): Promise<Vehicle> {
    const { data } = await httpCoreApiProvider.delete(
      `${resourses.vehicle}/${params.id}`
    )
    return data
  }
}

export namespace VehicleService {
  export type deleteById = {
    id: string
  }
  export type loadById = {
    id: string
  }
  export type loadByColor = {
    color: string
  }
  export type loadByType = {
    type: string
  }
  export type loadByPlateNumber = {
    plate: string
  }
  export type updateVehicle = Partial<Vehicle>
  export type createVehicle = Partial<Vehicle>
}

export default VehicleService
