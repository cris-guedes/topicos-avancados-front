import { LoadReportsByCityName } from './loadReportsByCityName'

import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'
import AddressService from '../../../infra/providers/apis/api-side/address-service'

const makeLoadReportByCityName = () => {
  const adressService = new AddressService()
  const genericHttp = new GenericHttpRequest()
  const LoadReportUseCase = new LoadReportsByCityName(
    adressService,
    genericHttp
  )
  return LoadReportUseCase
}

export default makeLoadReportByCityName
