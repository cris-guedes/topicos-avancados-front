import { LoadReportsByCityName } from './loadReportsByCityName'
import AddressService from '../../../infra/api-side/address-service'

const makeLoadReportByCityName = () => {
  const adressService = new AddressService()
  const LoadReportUseCase = new LoadReportsByCityName(adressService)
  return LoadReportUseCase
}

export default makeLoadReportByCityName
