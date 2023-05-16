import ReportService from '../../../infra/api-core/report-resourse'
import AddressService from '../../../infra/api-side/address-service'
import { CreateReportDTO } from './createReportDTO'

export class CreateReport {
  constructor(private readonly reportProvider: ReportService) {}
  async execute(reportData: CreateReportDTO) {
    /*
0:criar report
2:criar endereço
3:criar o veiculo 
4:criar o emplacamento
*/
    // const report = await this.reportProvider.createReport(reportData)
  }
}
