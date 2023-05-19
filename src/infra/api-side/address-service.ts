import { Address } from '../../domain/entities/addres'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

class AddressService {

    async createAddress(params: AddressService.createAddress) {
    const {data} = await httpSideApiProvider.post(
      `${resourses.address}`,
      params
    )
    return data

  }

  async loadAddress(): Promise<Address[]> {
    const { data } = await httpSideApiProvider.get(resourses.address)
    return data
  }

  async loadAddressById(params: AddressService.loadById): Promise<Address> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.address}/${params.id}`
    )
    return data
  }

  async updateAddress(params: AddressService.updateAddress) {
    const {data} = await httpSideApiProvider.put(
      `${resourses.address}/${params.id}`,
      params
    )
    return data;
  }

  async deleteAddress(params: AddressService.deleteById): Promise<Address> {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.address}/${params.id}`
    )
    return data
  }
}

export namespace AddressService {
  export type deleteById = {
    id: string
  }
  export type loadById = {
    id: string
  }
  export type updateAddress = Partial<Address>
  export type createAddress = Partial<Address>
}

export default AddressService
