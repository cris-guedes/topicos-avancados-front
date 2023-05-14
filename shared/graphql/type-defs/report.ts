import { gql } from '@apollo/client'

export const reportType = gql`
  type Report {
    id: String
    date: String
    period: String
    parts: [String]
    address: String
    vehicle: String
  }
  input InputReport {
    date: String
    period: String
    parts: [String]
    address: String
    vehicle: String
  }

  type Query {
    loadReportsByPeriod(period: String): [Report]
    loadReportsByCityName(city: String): [Report]
    loadReportById(id: String): Report
  }
  type Mutation {
    createReport(report: InputReport): Report
    deleteReportById(reportId: String): Report
    updateReportById(reportId: String): Report
  }
`
