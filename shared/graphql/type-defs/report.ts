import { gql } from '@apollo/client'

export const reportType = gql`
  type Report {
    id: String
    dataOcorrencia: String
    periodoOcorrencia: String
    partes: String
    localOcorrencia: String
    veiculoFurtado: String
  }

  type ReportById {
    id: String
    dataOcorrencia: String
    periodoOcorrencia: String
    partes: Part
    localOcorrencia: Address
    veiculoFurtado: Vehicle
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
    loadReportById(reportId: String): ReportById
    loadReports: [Report]
    loadData: [Report]
  }
  type Mutation {
    createReport(report: InputReport): Report
    deleteReportById(reportId: String): Report
    updateReportById(reportId: String): Report
  }
`
