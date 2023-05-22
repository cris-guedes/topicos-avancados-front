import envs from '../../../../shared/envs'
import ReportService from '../../../infra/api-core/report-resourse'
import VehicleService from '../../../infra/api-core/vehicles-resourse'
import AddressService from '../../../infra/api-side/address-service'
import CarRegistrationService from '../../../infra/api-side/car-registration-service'
import { CreateReportDTO } from './createReportDTO'

export class CreateReport {
  constructor(
    private readonly reportProvider: ReportService,
    private readonly carRegistrationProvider: CarRegistrationService,
    private readonly vehicleProvider: VehicleService,
    private readonly addressProvider: AddressService
  ) {}

  async execute(reportData: CreateReportDTO) {
    const {
      veiculoFurtado,
      localOcorrencia,
      dataOcorrencia,
      periodoOcorrencia
    } = reportData

    const emplacamento = veiculoFurtado.emplacamento

    const report = {
      dataOcorrencia: dataOcorrencia,
      periodoOcorrencia: periodoOcorrencia,
      partes: null,
      id: null,
      veiculoFurtado: 'link',
      localOcorrencia: 'link'
    }

    const address = {
      city: localOcorrencia.city,
      neighborhood: localOcorrencia.neighborhood,
      publicPlace: localOcorrencia.publicPlace,
      state: localOcorrencia.state,
      number: localOcorrencia.number,
      report: null,
      id: null
    }

    const registration = {
      city: emplacamento.city,
      plate: emplacamento.plate,
      state: emplacamento.state,
      vehicle: 'link',
      id: null
    }

    const vehicle = {
      anoFabricacao: veiculoFurtado.anoFabricacao,
      cor: veiculoFurtado.cor,
      fabricante: veiculoFurtado.fabricante,
      modelo: veiculoFurtado.modelo,
      tipoVeiculo: veiculoFurtado.tipoVeiculo,
      emplacamento: 'link',
      boletim: 'link',
      id: null
    }

    const savedAddress = await this.addressProvider.createAddress(address)
    const savedReport = await this.reportProvider.createReport(report)
    const savedVehicle = await this.vehicleProvider.createVehicle(vehicle)
    const savedRegistration =
      await this.carRegistrationProvider.createCarRegistration(registration)

    report.id = savedReport.id
    report.veiculoFurtado = envs.API.coreApi + '/veiculos/' + savedVehicle.id
    report.localOcorrencia = envs.API.sideApi + '/address/' + savedAddress.id

    address.id = savedAddress.id
    address.report = envs.API.coreApi + '/boletins/' + savedReport.id

    registration.id = savedRegistration.id
    registration.vehicle = envs.API.coreApi + '/veiculos/' + savedVehicle.id

    vehicle.id = savedVehicle.id
    vehicle.emplacamento =
      envs.API.sideApi + '/car-registration/' + savedRegistration.id
    vehicle.boletim = envs.API.coreApi + '/boletins/' + savedReport.id

    await this.addressProvider.updateAddress(address)
    await this.vehicleProvider.updateVehicle(vehicle)
    await this.carRegistrationProvider.updateCarRegistration(registration)
    return await this.reportProvider.updateReport(report)
  }
}
