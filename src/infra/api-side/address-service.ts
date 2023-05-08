import { Address } from "../../domain/entities/addres"
import httpSideApiProvider from "./config/axios"
import resourses from "./config/resourses"


class AddressService {
  async loadAddress(): Promise<Address[]> {
    const { data } = await httpSideApiProvider.get(resourses.address)
    return data
  }

  async loadAddressById(
    params: AddressService.loadById
  ): Promise<Address> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.address}/${params.id}`
    )
    return data
  }

  async updateAddress(params: AddressService.updateAddress) {
    return await httpSideApiProvider.put(`${resourses.address}/${params.id}`, params)
  }

  async deleteAddress(
    params: AddressService.deleteById
  ): Promise<Address> {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.address}/${params.id}`
    )
    return data
  }

}

export namespace AddressService {
  export type deleteById ={
    id:string
  }
  export type loadById = {
    id: string
  }
  export type updateAddress = Partial<Address>
}

export default new AddressService()