import { LoadReportsByCityName } from './loadReportsByCityName'
import ReportService from '../../../infra/api-core/report-resourse'

const makeLoadReportByCityName = () => {
  const reportProvider = new ReportService()
  const LoadReportUseCase = new LoadReportsByCityName(reportProvider)
  return LoadReportUseCase
}

export default makeLoadReportByCityName
