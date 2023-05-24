import { LoadReportsByCityName } from './loadReportsByCityName'
import AddressService from '../../../infra/api-side/address-service'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'

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
