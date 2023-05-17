import ReportService from '../../../infra/api-core/report-resourse'

export class LoadReports {
  constructor(private readonly reportPorvider: ReportService) {}

  async execute() {
    return await this.reportPorvider.loadReports()
  }
}
