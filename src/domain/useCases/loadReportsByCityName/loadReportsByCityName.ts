import ReportService from '../../../infra/api-core/report-resourse'

export class LoadReportsByCityName {
  constructor(private readonly reportProvider: ReportService) {}

  async execute(city: string) {
    return await this.reportProvider.loadReportsByCityName({ city })
  }
}
