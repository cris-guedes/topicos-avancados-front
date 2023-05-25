import ReportService from '../../../infra/providers/apis/api-core/report-resourse'

export class UpdateReportById {
  constructor(private readonly reportPorvider: ReportService) {}

  async execute(reportId: string, data:any) {
    return await this.reportPorvider.update({ id: reportId ,data})
  }
}
