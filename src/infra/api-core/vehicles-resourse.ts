import { Vehicle } from '../../domain/entities/vehicle'
import httpCoreApiProvider from './config/axios'
import resourses from './config/resourses'

class VehicleService {
  async loadVehicle(): Promise<Vehicle[]> {
    const { data } = await httpCoreApiProvider.get(resourses.vehicle)
    return data
  }

  async loadVehicleById(params: VehicleService.loadById): Promise<Vehicle> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.vehicle}/${params.id}`
    )
    return data
  }

  async updateVehicle(params: VehicleService.updateVehicle) {
    return await httpCoreApiProvider.put(
      `${resourses.vehicle}/${params.id}`,
      params
    )
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
  export type updateVehicle = Partial<Vehicle>
}

export default VehicleService
