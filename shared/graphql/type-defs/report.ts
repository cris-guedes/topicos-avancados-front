import { gql } from '@apollo/client'

export const reportType = gql`
  type Report {
    id: String
    dataOcorrencia: String
    periodoOcorrencia: String
    partes: [String]
    localOcorrencia: String
    veiculoFurtado: String
  }

  input InputReport {
    dataOcorrencia: String
    periodoOcorrencia: String
    partes: InputPart
    localOcorrencia: InputAddress
    veiculoFurtado: InputVehicle
  }

  type Query {
    loadReportsByPeriod(period: String): [Report]
    loadReportsByCityName(city: String): [Report]
    loadReportById(reportId: String): Report
    loadReports: [Report]
    loadData: [Report]
  }
  type Mutation {
    createReport(report: InputReport): Report
    deleteReportById(reportId: String): Report
    updateReportById(reportId: String): Report
  }
`
