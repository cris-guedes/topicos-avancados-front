import { LoadReportById } from './loadReportById'
import ReportService from '../../../infra/providers/apis/api-core/report-resourse'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'

const makeLoadReportById = () => {
  const reportProvider = new ReportService()
  const httpProvider = new GenericHttpRequest()
  const LoadReportUseCase = new LoadReportById(reportProvider, httpProvider)
  return LoadReportUseCase
}

export default makeLoadReportById
