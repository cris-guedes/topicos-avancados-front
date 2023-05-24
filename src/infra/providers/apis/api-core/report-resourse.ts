import { Id } from '../../../InfraDTOS/baseDTO'
import httpCoreProvider from './config/axios'
import resourses from './config/resourses'
import { ReportInfraDTO } from '../../../InfraDTOS/reportInfraDTO'

class ReportService {
  async create(params: Input.Create) {
    const { data } = await httpCoreProvider.post(`${resourses.report}`, params)
    return data
  }

  async loadReportsByPeriod(params: Input.LoadByPeriod): OutPut.LoadByPeriod {
    const { data } = await httpCoreProvider.get(
      `${resourses.report}?periodo=${params.period}`
    )
    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpCoreProvider.get(resourses.report)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpCoreProvider.get(
      `${resourses.report}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpCoreProvider.put(
      `${resourses.report}/${params.id}`,
      params.data
    )
    return data
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpCoreProvider.delete(
      `${resourses.report}/${params.id}`
    )
    return data
  }
}

export namespace Input {
  export type DeleteById = {
    id: Id
  }

  export type LoadById = {
    id: Id
  }

  export type LoadByPeriod = {
    period: string
  }

  export type LoadByCity = {
    city: string
  }

  export type Create = Partial<ReportInfraDTO>

  export type Update = {
    data: Partial<Omit<ReportInfraDTO, 'id'>>
    id: string
  }
}

export namespace OutPut {
  export type Update = Promise<ReportInfraDTO>
  export type Create = Promise<ReportInfraDTO>
  export type LoadById = Promise<ReportInfraDTO>
  export type Load = Promise<ReportInfraDTO[]>
  export type DeleteById = Promise<void>
  export type LoadByCity = Promise<ReportInfraDTO[]>
  export type LoadByPeriod = Promise<ReportInfraDTO[]>
}

export default ReportService
