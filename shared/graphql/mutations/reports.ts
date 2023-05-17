import { gql } from '@apollo/client'

export const CREATE_REPORT = gql`
  mutation CreateReport($report: InputReport) {
    createReport(report: $report) {
      id
      dataOcorrencia
      periodoOcorrencia
      partes
      localOcorrencia
      veiculoFurtado
    }
  }
`

export const DELETE_REPORT_BY_ID = gql`
  mutation DeleteReportById($reportId: String) {
    deleteReportById(reportId: $reportId) {
      dataOcorrencia
      partes
      localOcorrencia
      id
      periodoOcorrencia
      veiculoFurtado
    }
  }
`

export const UPDATE_REPORT_BY_ID = gql`
  mutation UpdateReportById($reportId: String) {
    updateReportById(reportId: $reportId) {
      id
      dataOcorrencia
      periodoOcorrencia
      partes
      localOcorrencia
      veiculoFurtado
    }
  }
`
