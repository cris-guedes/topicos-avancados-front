import { Id } from '../../../InfraDTOS/baseDTO'
import { PartInfraDTO } from '../../../InfraDTOS/partInfraDTO'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

class PartService {
  async create(params: Input.Create) {
    const { data } = await httpSideApiProvider.post(`${resourses.part}`, params)
    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpSideApiProvider.get(resourses.part)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpSideApiProvider.get(
      `${resourses.part}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpSideApiProvider.put(
      `${resourses.part}/${params.id}`,
      params.data
    )
    return data
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.part}/${params.id}`
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

  export type Create = Partial<PartInfraDTO>

  export type Update = {
    data: Partial<Omit<PartInfraDTO, 'id'>>
    id: string
  }
}

export namespace OutPut {
  export type Update = Promise<PartInfraDTO>
  export type Create = Promise<PartInfraDTO>
  export type LoadById = Promise<PartInfraDTO>
  export type Load = Promise<PartInfraDTO[]>
  export type DeleteById = Promise<void>
  export type LoadByCity = Promise<PartInfraDTO[]>
}

export default PartService
