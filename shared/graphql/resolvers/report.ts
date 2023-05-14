import makeCreateReport from '../../../src/domain/useCases/createReport'

export const reportResolver = {
  Query: {
    loadReportsByCityName(city: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
    loadReportsByPeriod(period: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
    loadReportById(id: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    }
  },
  Mutation: {
    createReport(report: any) {
      return makeCreateReport().execute(report)
    },
    deleteReportById(reportId: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    },
    updateReportById(reportId: String) {
      return { id: 1, name: 'John Smith', status: 'cached' }
    }
  }
}
