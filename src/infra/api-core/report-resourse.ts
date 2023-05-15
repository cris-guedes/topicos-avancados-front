import { Report } from '../../domain/entities/report'
import httpCoreApiProvider from './config/axios'
import resourses from './config/resourses'

class ReportService {
  async loadReport(): Promise<Report[]> {
    const { data } = await httpCoreApiProvider.get(resourses.report)
    return data
  }

  async loadReportById(params: ReportService.loadById): Promise<Report> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.report}/${params.id}`
    )
    return data
  }
  async loadReportsByCityName(
    params: ReportService.loadByCityName
  ): Promise<Report[]> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.report}/?city=${params.city}`
    )
    return data
  }

  async loadReportsByPeriod(
    params: ReportService.loadByPeriod
  ): Promise<Report[]> {
    const { data } = await httpCoreApiProvider.get(
      `${resourses.report}/?period=${params.period}`
    )
    return data
  }

  async createReport(params: ReportService.createReport) {
    return await httpCoreApiProvider.post(
      `${resourses.report}/${params.id}`,
      params
    )
  }

  async updateReport(params: ReportService.updateReport) {
    return await httpCoreApiProvider.put(
      `${resourses.report}/${params.id}`,
      params
    )
  }

  async deleteReport(params: ReportService.deleteById): Promise<Report> {
    const { data } = await httpCoreApiProvider.delete(
      `${resourses.report}/${params.id}`
    )
    return data
  }
}

export namespace ReportService {
  export type deleteById = {
    id: string
  }
  export type loadById = {
    id: string
  }
  export type loadByCityName = {
    city: string
  }
  export type loadByPeriod = {
    period: string
  }
  export type updateReport = Partial<Report>
  export type createReport = Partial<Report>
}

export default ReportService
