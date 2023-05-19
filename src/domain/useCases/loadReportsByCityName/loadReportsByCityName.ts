import ReportService from '../../../infra/api-core/report-resourse'
import AddressService from '../../../infra/api-side/address-service'

export class LoadReportsByCityName {
  constructor(private readonly adressService: AddressService) {}

  async execute(city: string) {
    return await this.adressService.loadAddressByCity({ city })
  }
}
