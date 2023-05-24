/*import { Id } from '../../../InfraDTOS/baseDTO'
import { T } from '../../../InfraDTOS/partInfraDTO'
import httpSideApiProvider from './config/axios'
import resourses from './config/resourses'

abstract class AbstractApiService<T> {
  async create(params: Input.Create) {
    const { data } = await httpSideApiProvider.post(`${resourses.part}`, params)
    return data
  }

  async load(): OutPut.Load {
    const { data } = await httpSideApiProvider.get(resourses.part)
    return data
  }

  async loadById(params: Input.LoadById): OutPut.LoadById {
    const { data } = await httpSideApiProvider.get(
      `${resourses.part}/${params.id}`
    )
    return data
  }

  async update(params: Input.Update): OutPut.Update {
    const { data } = await httpSideApiProvider.put(
      `${resourses.part}/${params.id}`,
      params.data
    )
    return data
  }

  async delete(params: Input.DeleteById): OutPut.DeleteById {
    const { data } = await httpSideApiProvider.delete(
      `${resourses.part}/${params.id}`
    )
    return data
  }
}

export type InputDeleteById<T> = {
    id: Id
  };
  
  export type InputLoadById<T> = {
    id: Id
  };
  
  export type InputLoadByPlateNumber<T> = {
    plate: Id
  };
  
  export type InputLoadByCity<T> = {
    city: string
  };
  
  export type InputCreate<T> = Partial<T>;
  
  export type InputUpdate<T> = {
    data: Partial<Omit<T, 'id'>>;
    id: string;
  };
  
  export type OutputUpdate<T> = Promise<T>;
  export type OutputCreate<T> = Promise<T>;
  export type OutputLoadById<T> = Promise<T>;
  export type OutputLoad<T> = Promise<T[]>;
  export type OutputDeleteById = Promise<void>;
  export type OutputLoadByCity<T> = Promise<T[]>;

export default PartService

*/
