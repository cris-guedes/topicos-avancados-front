import ReportService from '../../../infra/api-core/report-resourse'

export class LoadReportsByPeriod {
  constructor(private readonly reportProvider: ReportService) {}

  async execute(period: string) {
    return await this.reportProvider.loadReportsByPeriod({ period })
  }
}
