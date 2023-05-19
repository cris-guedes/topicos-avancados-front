import { Report } from '../../domain/entities/report'
import httpCoreApiProvider from './config/axios'
import resourses from './config/resourses'

class ReportService {
  async loadReports(): Promise<Report[]> {
    try {
      const { data, request } = await httpCoreApiProvider.get(resourses.report)
      return data
    } catch (e) {}
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
    const { data, request } = await httpCoreApiProvider.get(
      `${resourses.report}/?cidade=${params.city}`
    )

    return data
  }

  async loadReportsByPeriod(
    params: ReportService.loadByPeriod
  ): Promise<Report[]> {
    console.log('passou aqui')
    try {
      const { data, request } = await httpCoreApiProvider.get(
        `${resourses.report}?periodo=${params.period}`
      )
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
    }
  }

  async createReport(params: ReportService.createReport) {
    const {data} = await httpCoreApiProvider.post(
      `${resourses.report}`,
      params
    )
    return data
  }

  async updateReport(params: ReportService.updateReport) {
    console.log("params: ", params)
    const {data} = await httpCoreApiProvider.put(
      `${resourses.report}/${params.id}`,
      params
    )
    console.log("data: ", data)
    return data;
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
