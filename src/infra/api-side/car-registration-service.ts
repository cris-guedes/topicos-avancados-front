import { CarRegistration } from '../../domain/entities/car-registrations'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

class CarRegistrationService {
  async createCarRegistration(
    params: CarRegistrationService.createCarRegistration
  ) {
    const { data } = await httpSideApiProvider.post(
      `${resourses.carRegistration}`,
      params
    )
    return data
  }

  async loadCarRegistration(): Promise<CarRegistration[]> {
    const { data } = await httpSideApiProvider.get(resourses.carRegistration)
    return data
  }

  async loadCarRegistrationById(
    params: CarRegistrationService.loadById
  ): Promise<CarRegistration> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.carRegistration}/${params.id}`
    )
    return data
  }

  async updateCarRegistration(
    params: CarRegistrationService.updateCarRegistration
  ) {
    const { data } = await httpSideApiProvider.put(
      `${resourses.carRegistration}/${params.id}`,
      params
    )
    return data
  }
  async loadCarRegistrationByPlateNumber(
    params: CarRegistrationService.loadByPlateNumber
  ): Promise<CarRegistration[]> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.carRegistration}?plate${params.plate}`
    )
    return data
  }

  async deleteCarRegistration(
    params: CarRegistrationService.deleteById
  ): Promise<CarRegistration> {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.carRegistration}/${params.id}`
    )
    return data
  }
}

export namespace CarRegistrationService {
  export type deleteById = {
    id: string
  }
  export type loadById = {
    id: string
  }
  export type loadByPlateNumber = {
    plate: string
  }
  export type updateCarRegistration = Partial<CarRegistration>
  export type createCarRegistration = Partial<CarRegistration>
}

export default CarRegistrationService
