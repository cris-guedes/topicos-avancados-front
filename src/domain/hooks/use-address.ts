
import { useMutation, useQuery } from 'react-query'
import addressService from '../../infra/api-side/address-service'
import { Address } from '../entities/addres'
import { queryClient } from '../../main/shared/query-client'

function useAddress() {

  const update = useMutation(addressService.updateAddress, {
    onSuccess: () => queryClient.invalidateQueries(['Address', 'Address'])
  })

  function loadAddress() {

      return addressService.loadAddress()
  
  }

  function loadDetails(params: UseAddress.loadDetails) {
    return useQuery(['address', params], () =>
      addressService.loadAddressById(params)
    )
  }

  function updateAddress(params: UseAddress.updateAddress) {
    update.mutate(params)
  }

  return {
    loadAddress,
    loadDetails,
    updateAddress
  }
}

export namespace UseAddress {
  export type loadAddress = {
    limit: number
    filter: string
  }
  export type loadDetails = {
    id: string
  }
  export type updateAddress = Partial<Address>
}

export default useAddress