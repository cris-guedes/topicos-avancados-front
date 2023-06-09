import { LoadReports } from './loadReports'
import ReportService from '../../../infra/providers/apis/api-core/report-resourse'

const makeLoadReports = () => {
  const reportProvider = new ReportService()
  const LoadReportUseCase = new LoadReports(reportProvider)
  return LoadReportUseCase
}

export default makeLoadReports
