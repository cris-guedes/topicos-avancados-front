import ReportService from '../../../infra/api-core/report-resourse'
import { CreateReport } from './createReport'

const makeCreateReport = () => {
  const reportProvider = new ReportService()
  const createReportUseCase = new CreateReport(reportProvider)
  return createReportUseCase
}

export default makeCreateReport
