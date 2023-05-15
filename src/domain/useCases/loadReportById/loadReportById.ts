import ReportService from '../../../infra/api-core/report-resourse'

export class LoadReportById {
  constructor(private readonly reportPorvider: ReportService) {}

  async execute(reportId: string) {
    return await this.reportPorvider.loadReportById({ id: reportId })
  }
}
