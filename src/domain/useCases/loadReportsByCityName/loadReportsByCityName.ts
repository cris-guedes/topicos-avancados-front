import ReportService from '../../../infra/api-core/report-resourse'

export class dd {
  constructor(private readonly reportProvider: ReportService) {}

  async execute(id: string) {
    return this.reportProvider.loadReportById({ id })
  }
}
