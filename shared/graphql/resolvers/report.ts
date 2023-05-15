import makeCreateReport from '../../../src/domain/useCases/createReport'
import makeDeleteReportById from '../../../src/domain/useCases/deleteReportById'
import makeLoadReportById from '../../../src/domain/useCases/loadReportById'
import makeLoadReportByCityName from '../../../src/domain/useCases/loadReportsByCityName'
import makeLoadReportByPeriod from '../../../src/domain/useCases/loadReportsByPeriod'
import makeUpdateReportById from '../../../src/domain/useCases/updateReportById'

export const reportResolver = {
  Query: {
    loadReportsByCityName(city: string) {
      return makeLoadReportByCityName().execute(city)
    },
    loadReportsByPeriod(period: string) {
      return makeLoadReportByPeriod().execute(period)
    },
    loadReportById(reportId: string) {
      return makeLoadReportById().execute(reportId)
    }
  },
  Mutation: {
    createReport(report: any) {
      return makeCreateReport().execute(report)
    },
    deleteReportById(reportId: string) {
      return makeDeleteReportById().execute(reportId)
    },
    updateReportById(reportId: string) {
      return makeUpdateReportById().execute(reportId)
    }
  }
}
