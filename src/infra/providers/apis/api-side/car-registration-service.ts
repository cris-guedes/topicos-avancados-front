import { Id } from '../../../InfraDTOS/baseDTO'
import { CarRegistrationInfraDTO } from '../../../InfraDTOS/car-registrationsInfraDTO'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

class CarRegistrationService {
  async create(params: Input.Create) {
    const { data } = await httpSideApiProvider.post(
      `${resourses.carRegistration}`,
      params
    )
    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpSideApiProvider.get(resourses.carRegistration)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpSideApiProvider.get(
      `${resourses.carRegistration}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpSideApiProvider.put(
      `${resourses.carRegistration}/${params.id}`,
      params.data
    )
    return data
  }

  async loadByPlateNumber(
    params: Input.LoadByPlateNumber
  ): OutPut.LoadByPlateNumber {
    try {
      const { data } = await httpSideApiProvider.get(
        `${resourses.carRegistration}?plate=${params.plate}`
      )
      return data
    } catch (e) {
      console.log(e)
    }
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.carRegistration}/${params.id}`
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
  export type Create = Partial<CarRegistrationInfraDTO>

  export type Update = {
    data: Partial<Omit<CarRegistrationInfraDTO, 'id'>>
    id: string
  }
}

export namespace OutPut {
  export type LoadByPlateNumber = Promise<CarRegistrationInfraDTO>
  export type Update = Promise<CarRegistrationInfraDTO>
  export type Create = Promise<CarRegistrationInfraDTO>
  export type LoadById = Promise<CarRegistrationInfraDTO>
  export type Load = Promise<CarRegistrationInfraDTO[]>
  export type DeleteById = Promise<void>
}

export default CarRegistrationService
