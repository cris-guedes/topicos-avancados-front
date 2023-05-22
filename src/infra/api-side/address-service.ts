import { Address } from '../../domain/entities/addres'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'
import axios from 'axios'

class AddressService {
  async createAddress(params: AddressService.createAddress) {
    const { data } = await httpSideApiProvider.post(
      `${resourses.address}`,
      params
    )
    return data
  }

  async loadAddressByCity(
    params: AddressService.loadByCity
  ): Promise<Address[]> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.address}?city=${params.city}`
    )
    const reports = data?.filter((address) => {
      if (address.report) return address
    })

    const result = Promise.all(
      reports?.map(async (report) => {
        try {
          const { data } = await axios.get(report.report)
          console.log(result)
          return data
        } catch (e) {
          console.log(e)
        }
      })
    )

    console.log(await result)
    return await result
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
    const { data } = await httpSideApiProvider.put(
      `${resourses.address}/${params.id}`,
      params
    )
    return data
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
  export type loadByCity = {
    city: string
  }
  export type updateAddress = Partial<Address>
  export type createAddress = Partial<Address>
}

export default AddressService
