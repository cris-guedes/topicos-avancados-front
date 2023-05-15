import { UpdateReportById } from './updateReportById'
import ReportService from '../../../infra/api-core/report-resourse'

const makeUpdateReportById = () => {
  const reportProvider = new ReportService()
  const UpdateReportUseCase = new UpdateReportById(reportProvider)
  return UpdateReportUseCase
}

export default makeUpdateReportById
