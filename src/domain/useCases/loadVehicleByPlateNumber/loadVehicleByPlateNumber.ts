import CarRegistrationService from '../../../infra/providers/apis/api-side/car-registration-service'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'

export class LoadVehiclesByPlateNumber {
  constructor(
    private readonly carRegistrationProvider: CarRegistrationService,
    private readonly httpRequester: GenericHttpRequest
  ) {}

  async execute(plateNumber: string) {
    console.log(plateNumber)
    try {
      const emplacamento = await this.carRegistrationProvider.loadByPlateNumber(
        {
          plate: plateNumber
        }
      )
      const result = emplacamento
        ? await this.httpRequester.get(emplacamento.vehicle)
        : null
      console.log(result)
      return { ...result, emplacamento }
    } catch (e) {
      console.log(e)
    }
  }
}
