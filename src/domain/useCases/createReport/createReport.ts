import envs from '../../../../shared/envs'
import ReportService from '../../../infra/providers/apis/api-core/report-resourse'
import VehicleService from '../../../infra/providers/apis/api-core/vehicles-resourse'
import AddressService from '../../../infra/api-side/address-service'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'
import PartService from '../../../infra/api-side/part-service'
import GenericHttpRequest from '../../../infra/providers/genericHttpRequest/genericHttpRequest'
import { InputAddress } from '../../entities/addres'
import { InputCarRegistration } from '../../entities/car-registrations'
import { InputPart } from '../../entities/part'
import { Report } from '../../entities/report'
import { InputVehicle } from '../../entities/vehicle'
import { CreateReportDTO } from './createReportDTO'

export class CreateReport {
  constructor(
    private readonly reportProvider: ReportService,
    private readonly carRegistrationProvider: CarRegistrationService,
    private readonly vehicleProvider: VehicleService,
    private readonly addressProvider: AddressService,
    private readonly partProvider: PartService,
    private readonly genericHttpRequest: GenericHttpRequest
  ) {}

  async execute(reportDTO: CreateReportDTO) {
    console.log(reportDTO)
    try {
      this.validateReportDTO(reportDTO)
      const normalizedReportData = await this.normalizeReportData(reportDTO)

      const report = await this.createReport(normalizedReportData)

      console.log('Report', report.data)
      await this.updateRelations(report)

      return report.data
    } catch (e) {
      console.log(e)
    }
  }

  private async createAddress(address: InputAddress) {
    const savedAddress = await this.addressProvider.createAddress(address)
    return envs.API.sideApi + '/address/' + savedAddress.id
  }

  private async createParts(part: InputPart) {
    const savedPart = await this.partProvider.createParts(part)
    return envs.API.sideApi + '/parts/' + savedPart.id
  }

  private async createVehicle(vehicle: InputVehicle) {
    const emplacamento = await this.createCarRegistration(vehicle.emplacamento)

    const vehicleData = { ...vehicle, emplacamento: emplacamento.resourse }

    const savedVehicle = await this.vehicleProvider.createVehicle(vehicleData)

    await this.linkCarRegistrationWithVehicle(
      emplacamento.data,
      emplacamento.data.id
    )

    return envs.API.coreApi + '/veiculos/' + savedVehicle.id
  }

  private async createCarRegistration(carRegistration: InputCarRegistration) {
    const savedCarRegistration =
      await this.carRegistrationProvider.createCarRegistration(carRegistration)
    return {
      resourse:
        envs.API.sideApi + '/car-registration/' + savedCarRegistration.id,
      data: savedCarRegistration
    }
  }

  private async linkCarRegistrationWithVehicle(
    carRegistrationWithVehicleLink: InputCarRegistration,
    carRegistrationId: string
  ) {
    const savedCarRegistration =
      await this.carRegistrationProvider.updateCarRegistration({
        data: carRegistrationWithVehicleLink,
        id: carRegistrationId
      })
    return envs.API.sideApi + '/car-registration/' + savedCarRegistration.id
  }

  private async createReport(data: {
    dataOcorrencia: string
    periodoOcorrencia: string
    partes?: string
    localOcorrencia: string
    veiculoFurtado?: string
  }) {
    const report = await this.reportProvider.createReport(data)

    return {
      resourse: envs.API.coreApi + '/boletins/' + report.id,
      data: report
    }
  }

  private async normalizeReportData(reportDTO: CreateReportDTO) {
    const {
      localOcorrencia,
      partes,
      dataOcorrencia,
      periodoOcorrencia,
      veiculoFurtado
    } = reportDTO

    const reportData = {
      dataOcorrencia,
      localOcorrencia: await this.createAddress(localOcorrencia),
      partes: await this.createParts(partes),
      periodoOcorrencia,
      veiculoFurtado: await this.createVehicle(veiculoFurtado)
    }

    return reportData
  }

  private async updateRelations(report: {
    resourse: string
    data: {
      dataOcorrencia: string
      periodoOcorrencia: string
      partes?: string
      localOcorrencia: string
      veiculoFurtado?: string
    }
  }) {
    const address = {
      ...(await this.genericHttpRequest.get(report.data.localOcorrencia)),
      report: report.resourse
    }

    const vehicle = {
      ...(await this.genericHttpRequest.get(report.data.veiculoFurtado)),
      report: report.resourse
    }

    console.log('Adress', await this.addressProvider.updateAddress(address))
    console.log('Vehicle', await this.vehicleProvider.updateVehicle(vehicle))
    return
  }

  private validateReportDTO(params: CreateReportDTO) {
    throw new Error('Formato inválido')
  }
}
