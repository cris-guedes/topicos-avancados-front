import { Id } from '../../../InfraDTOS/baseDTO'
import httpCoreProvider from './config/axios'
import resourses from './config/resourses'
import { VehicleInfraDTO } from '../../../InfraDTOS/vehicleInfraDTO'

class VehiclesService {
  async create(params: Input.Create) {
    const { data } = await httpCoreProvider.post(`${resourses.vehicle}`, params)
    return data
  }

  async loadByColor(params: Input.loadByColor) {
    const { data } = await httpCoreProvider.get(
      `${resourses.vehicle}?cor=${params.color}`
    )
    return data
  }

  async loadByType(params: Input.loadByType): OutPut.LoadByType {
    const { data } = await httpCoreProvider.get(
      `${resourses.vehicle}?tipo=${params.type}`
    )
    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpCoreProvider.get(resourses.vehicle)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpCoreProvider.get(
      `${resourses.vehicle}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpCoreProvider.put(
      `${resourses.vehicle}/${params.id}`,
      params.data
    )
    return data
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpCoreProvider.delete(
      `${resourses.vehicle}/${params.id}`
    )
    return data
  }
}

export namespace Input {
  export type DeleteById = {
    id: Id
  }
  export type loadByColor = {
    color: string
  }
  export type loadByType = {
    type: string
  }

  export type LoadById = {
    id: Id
  }

  export type Create = Partial<VehicleInfraDTO>

  export type Update = {
    data: Partial<Omit<VehicleInfraDTO, 'id'>>
    id: string
  }
}

export namespace OutPut {
  export type Update = Promise<VehicleInfraDTO>
  export type Create = Promise<VehicleInfraDTO>
  export type LoadById = Promise<VehicleInfraDTO>
  export type Load = Promise<VehicleInfraDTO[]>
  export type DeleteById = Promise<void>
  export type LoadByType = Promise<VehicleInfraDTO[]>
  export type LoadByColor = Promise<VehicleInfraDTO[]>
}

export default VehiclesService
