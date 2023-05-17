import { gql } from '@apollo/client'

export const LOAD_REPORTS = gql`
  query LoadReports {
    loadReports {
      id
      localOcorrencia
      periodoOcorrencia
      partes
      veiculoFurtado
      dataOcorrencia
    }
  }
`

export const LOAD_REPORTS_BY_ID = gql`
  query LoadReportById($reportId: String) {
    loadReportById(reportId: $reportId) {
      dataOcorrencia
      id
      localOcorrencia
      partes
      periodoOcorrencia
      veiculoFurtado
    }
  }
`

export const LOAD_REPORTS_BY_CITY_NAME = gql`
  query LoadReportsByCityName($city: String) {
    loadReportsByCityName(city: $city) {
      dataOcorrencia
      id
      localOcorrencia
      partes
      periodoOcorrencia
      veiculoFurtado
    }
  }
`

export const LOAD_REPORTS_BY_PERIOD = gql`
  query LoadReportsByPeriod($period: String) {
    loadReportsByPeriod(period: $period) {
      dataOcorrencia
      id
      localOcorrencia
      partes
      periodoOcorrencia
      veiculoFurtado
    }
  }
`
