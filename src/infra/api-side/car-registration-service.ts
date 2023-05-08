import { CarRegistration } from "../../domain/entities/car-registrations"
import httpSideApiProvider from "./config/axios"
import resourses from "./config/resourses"


class CarRegistrationService {
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

  async updateQuestion(params: CarRegistrationService.updateQuestion) {
    return await httpSideApiProvider.put(`${resourses.carRegistration}/${params.id}`, params)
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
  export type deleteById ={
    id:string
  }
  export type loadById = {
    id: string
  }
  export type updateQuestion = Partial<CarRegistration>
}

export default new CarRegistrationService()