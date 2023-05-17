import makeCreateReport from '../../../src/domain/useCases/createReport'
import { CreateReportDTO } from '../../../src/domain/useCases/createReport/createReportDTO'
import makeDeleteReportById from '../../../src/domain/useCases/deleteReportById'
import makeLoadReportById from '../../../src/domain/useCases/loadReportById'
import makeLoadReports from '../../../src/domain/useCases/loadReports'
import makeLoadReportByCityName from '../../../src/domain/useCases/loadReportsByCityName'
import makeLoadReportByPeriod from '../../../src/domain/useCases/loadReportsByPeriod'
import makeUpdateReportById from '../../../src/domain/useCases/updateReportById'

export const reportResolver = {
  Query: {
    loadReportsByCityName(_, { city }) {
      return makeLoadReportByCityName().execute(city)
    },
    async loadReportsByPeriod(_, { period }) {
      return await makeLoadReportByPeriod().execute(period)
    },
    loadReportById(_, { reportId }) {
      return makeLoadReportById().execute(reportId)
    },
    loadReports() {
      return makeLoadReports().execute()
    }
  },
  Mutation: {
    createReport(_, { report }) {
      return makeCreateReport().execute(report)
    },
    deleteReportById(_, { reportId }) {
      return makeDeleteReportById().execute(reportId)
    },
    updateReportById(__, { reportId }) {
      return makeUpdateReportById().execute(reportId)
    }
  }
}
