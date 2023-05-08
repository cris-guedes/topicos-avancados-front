import { Part } from "../../domain/entities/part"
import httpSideApiProvider from "./config/axios"
import resourses from "./config/resourses"


class PartService {
  async loadPart(): Promise<Part[]> {
    const { data } = await httpSideApiProvider.get(resourses.part)
    return data
  }

  async loadPartById(
    params: PartService.loadById
  ): Promise<Part> {
    const { data } = await httpSideApiProvider.get(
      `${resourses.part}/${params.id}`
    )
    return data
  }

  async updateQuestion(params: PartService.updateQuestion) {
    return await httpSideApiProvider.put(`${resourses.part}/${params.id}`, params)
  }

  async deletePart(
    params: PartService.deleteById
  ): Promise<Part> {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.part}/${params.id}`
    )
    return data
  }

}

export namespace PartService {
  export type deleteById ={
    id:string
  }
  export type loadById = {
    id: string
  }
  export type updateQuestion = Partial<Part>
}

export default new PartService()