import ReportService from '../../../infra/providers/apis/api-core/report-resourse'
import AddressService from '../../../infra/providers/apis/api-side/address-service'

import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'

export class LoadReportsByCityName {
  constructor(
    private readonly adressService: AddressService,
    private readonly genericHttProvider: GenericHttpRequest
  ) {}

  async execute(city: string) {
    const addresses = await this.adressService.loadByCity({ city })
    const adressesWithReports = addresses?.filter((address) => {
      if (address.report) return address
    })

    const reports = await Promise.all(
      adressesWithReports.map(async (report) => {
        return await this.genericHttProvider.get(report.report)
      })
    )

    return reports
  }
}
