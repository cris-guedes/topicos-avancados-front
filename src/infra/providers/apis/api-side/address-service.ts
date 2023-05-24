import { AddressInfraDTO } from '../../../InfraDTOS/addressInfraDTO'
import { Id } from '../../../InfraDTOS/baseDTO'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

class AddressService {
  async create(params: Input.Create) {
    const { data } = await httpSideApiProvider.post(
      `${resourses.address}`,
      params
    )
    return data
  }
  async loadByCity(params: Input.LoadByCity): OutPut.LoadByCity {
    const { data } = await httpSideApiProvider.get(
      `${resourses.address}?city=${params.city}`
    )

    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpSideApiProvider.get(resourses.address)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpSideApiProvider.get(
      `${resourses.address}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpSideApiProvider.put(
      `${resourses.address}/${params.id}`,
      params.data
    )
    return data
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.address}/${params.id}`
    )
    return data
  }
}

export namespace Input {
  export type DeleteById = {
    id: Id
  }

  export type LoadById = {
    id: Id
  }

  export type LoadByPlateNumber = {
    plate: Id
  }

  export type LoadByCity = {
    city: string
  }

  export type Create = Partial<AddressInfraDTO>

  export type Update = {
    data: Partial<Omit<AddressInfraDTO, 'id'>>
    id: string
  }
}

export namespace OutPut {
  export type Update = Promise<AddressInfraDTO>
  export type Create = Promise<AddressInfraDTO>
  export type LoadById = Promise<AddressInfraDTO>
  export type Load = Promise<AddressInfraDTO[]>
  export type DeleteById = Promise<void>
  export type LoadByCity = Promise<AddressInfraDTO[]>
}

export default AddressService
