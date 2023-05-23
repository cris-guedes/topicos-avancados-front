import ReportService from '../../../infra/api-core/report-resourse'
import AddressService from '../../../infra/api-side/address-service'
import GenericHttpRequest from '../../../infra/genericHttpRequest/genericHttpRequest'

export class LoadReportsByCityName {
  constructor(
    private readonly adressService: AddressService,
    private readonly genericHttProvider: GenericHttpRequest
  ) {}

  async execute(city: string) {
    const addresses = await this.adressService.loadAddressByCity({ city })
    const adressesWithReports = addresses?.filter((address) => {
      if (address.report) return address
    })
    console.log(addresses)

    const reports = Promise.all(
      adressesWithReports?.map(async (report) => {
        try {
          const { data } = await this.genericHttProvider.get(report.report)

          return data
        } catch (e) {
          console.log(e)
        }
      })
    )
    return await reports
  }
}
