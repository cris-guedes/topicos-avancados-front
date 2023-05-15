import ReportService from '../../../infra/api-core/report-resourse'
import { Report } from '../../entities/report'

export class CreateReport {
  constructor(private readonly reportProvider: ReportService) {}
  async execute(reportData: Report) {
    /*
0:criar report
1:criar part
2:criar endereço
3:criar o veiculo 
4:criar o emplacamento
*/

    const report = await this.reportProvider.createReport(reportData)
  }
}
