import ReportService from '../../../infra/providers/apis/api-core/report-resourse'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'
import { LoadReportByIdView } from './loadReportsByIdView'

export class LoadReportById {
  constructor(
    private readonly reportPorvider: ReportService,
    private readonly httpProvider: GenericHttpRequest
  ) {}

  async execute(reportId: string): Promise<LoadReportByIdView> {
    const data = await this.reportPorvider.loadById({ id: reportId })

    const {
      partes: partLink,
      localOcorrencia: localOcorrenciaLink,
      veiculoFurtado: veiculoFurtadoLink
    } = data

    const partes = partLink ? await this.httpProvider.get(partLink) : null
    const localOcorrencia = localOcorrenciaLink
      ? await this.httpProvider.get(localOcorrenciaLink)
      : null
    let veiculoFurtado = veiculoFurtadoLink
      ? await this.httpProvider.get(veiculoFurtadoLink)
      : null
    const emplacamento = veiculoFurtado?.emplacamento
      ? await this.httpProvider.get(veiculoFurtado?.emplacamento)
      : null
    veiculoFurtado = { ...veiculoFurtado, emplacamento }
    const report = { ...data, partes, localOcorrencia, veiculoFurtado }

    return report
  }
}
