import ReportService from '../../../infra/api-core/report-resourse'

export class LoadReportsByPeriod {
  constructor(private readonly reportProvider: ReportService) {}

  async execute(period: string) {
    console.log(period)
    return await this.reportProvider.loadReportsByPeriod({ period })
  }
}
