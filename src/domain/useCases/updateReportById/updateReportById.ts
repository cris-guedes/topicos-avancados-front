import ReportService from '../../../infra/providers/apis/api-core/report-resourse'

export class UpdateReportById {
  constructor(private readonly reportPorvider: ReportService) {}

  async execute(reportId: string) {
    return await this.reportPorvider.updateReport({ id: reportId })
  }
}
