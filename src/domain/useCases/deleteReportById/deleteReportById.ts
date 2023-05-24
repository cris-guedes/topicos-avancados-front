import ReportService from '../../../infra/providers/apis/api-core/report-resourse'

export class DeleteReportById {
  constructor(private readonly reportProvider: ReportService) {}

  async execute(reportId: string) {
    return await this.reportProvider.deleteReport({ id: reportId })
  }
}
