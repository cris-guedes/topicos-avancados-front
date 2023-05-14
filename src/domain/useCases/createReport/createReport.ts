import ReportService from '../../../infra/api-core/report-resourse'
import { Report } from '../../entities/report'

export class CreateReport {
  constructor(private readonly reportProvider: ReportService) {}
  async execute(reportData: Report) {
    const report = await this.reportProvider.createReport(reportData)
  }
}
