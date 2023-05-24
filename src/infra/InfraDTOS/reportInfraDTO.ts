import { Id, Link } from './baseDTO'

export type ReportInfraDTO = {
  id: Id
  dataOcorrencia: string
  periodoOcorrencia: string
  partes: Link
  localOcorrencia: Link
  veiculoFurtado: Link
}

export type InputReportInfraDTO = {
  dataOcorrencia: string
  periodoOcorrencia: string
  partes?: Link
  localOcorrencia: Link
  veiculoFurtado?: Link
}
