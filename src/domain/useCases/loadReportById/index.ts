import { LoadReportById } from './loadReportById'
import ReportService from '../../../infra/api-core/report-resourse'

const makeLoadReportById = () => {
  const reportProvider = new ReportService()
  const LoadReportUseCase = new LoadReportById(reportProvider)
  return LoadReportUseCase
}

export default makeLoadReportById