import { LoadReportsByPeriod } from './loadReportsByPeriod'
import ReportService from '../../../infra/providers/apis/api-core/report-resourse'

const makeLoadReportByPeriod = () => {
  const reportProvider = new ReportService()
  const LoadReportsByPeriodUseCase = new LoadReportsByPeriod(reportProvider)
  return LoadReportsByPeriodUseCase
}

export default makeLoadReportByPeriod
