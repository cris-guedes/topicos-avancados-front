import ReportService from '../../../infra/providers/apis/api-core/report-resourse'
import { DeleteReportById } from './deleteReportById'

const makeDeleteReportById = () => {
  const reportProvider = new ReportService()
  const DeleteReportUseCase = new DeleteReportById(reportProvider)
  return DeleteReportUseCase
}

export default makeDeleteReportById
