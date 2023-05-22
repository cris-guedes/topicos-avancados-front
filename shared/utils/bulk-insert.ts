import makeCreateReport from '../../src/domain/useCases/createReport'
import { data } from './csvjson'

export type Registers = Register[]

export interface Register {
  ANO_BO: number
  NUM_BO: number
  NUMERO_BOLETIM: string
  BO_INICIADO: string
  BO_EMITIDO: string
  DATAOCORRENCIA: string
  HORAOCORRENCIA: string
  PERIDOOCORRENCIA: string
  DATACOMUNICACAO: string
  DATAELABORACAO: string
  BO_AUTORIA: string
  FLAGRANTE: string
  NUMERO_BOLETIM_PRINCIPAL: string
  LOGRADOURO: string
  NUMERO: number
  BAIRRO: string
  CIDADE: string
  UF: string
  LATITUDE: string
  LONGITUDE: string
  DESCRICAOLOCAL: string
  EXAME: string
  SOLUCAO: string
  DELEGACIA_NOME: string
  DELEGACIA_CIRCUNSCRICAO: string
  ESPECIE: string
  RUBRICA: string
  DESDOBRAMENTO: string
  STATUS: string
  TIPOPESSOA: string
  VITIMAFATAL: string
  NATURALIDADE: string
  NACIONALIDADE: string
  SEXO: string
  DATANASCIMENTO: string
  IDADE: any
  ESTADOCIVIL: string
  PROFISSAO: string
  GRAUINSTRUCAO: string
  CORCUTIS: string
  NATUREZAVINCULADA: string
  TIPOVINCULO: string
  RELACIONAMENTO: string
  PARENTESCO: string
  PLACA_VEICULO: any
  UF_VEICULO: string
  CIDADE_VEICULO: string
  DESCR_COR_VEICULO: string
  DESCR_MARCA_VEICULO: string
  ANO_FABRICACAO: any
  ANO_MODELO: any
  DESCR_TIPO_VEICULO: string
  QUANT_CELULAR: string
  MARCA_CELULAR: string
}
const register = data

const createReportUseCase = makeCreateReport()
console.log('dataa', register)
export async function bulkInsert() {
  return register.map(async (register) => {
    setTimeout(function () {
      // Código a ser executado após 1 segundo
      console.log(' okey')
    }, 1000)
    const {
      ANO_BO,
      ANO_FABRICACAO: anoFabricacao,
      ANO_MODELO: modelo,
      BAIRRO: neighborhood,
      BO_AUTORIA,
      BO_EMITIDO,
      BO_INICIADO,
      CIDADE: city,
      CIDADE_VEICULO: cityVehicle,
      CORCUTIS,
      DATACOMUNICACAO,
      DATAELABORACAO,
      DATANASCIMENTO,
      DATAOCORRENCIA: dataOcorrencia,
      DELEGACIA_CIRCUNSCRICAO,
      DELEGACIA_NOME,
      DESCRICAOLOCAL,
      DESCR_COR_VEICULO: cor,
      DESCR_MARCA_VEICULO: fabricante,
      DESCR_TIPO_VEICULO: tipoVeiculo,
      DESDOBRAMENTO,
      ESPECIE,
      ESTADOCIVIL,
      EXAME,
      FLAGRANTE,
      GRAUINSTRUCAO,
      HORAOCORRENCIA,
      IDADE,
      LATITUDE,
      LOGRADOURO: publicPlace,
      LONGITUDE,
      MARCA_CELULAR,
      NACIONALIDADE,
      NATURALIDADE,
      NATUREZAVINCULADA,
      NUMERO: number,
      NUMERO_BOLETIM,
      NUMERO_BOLETIM_PRINCIPAL,
      NUM_BO,
      PARENTESCO,
      PERIDOOCORRENCIA: periodoOcorrencia,
      PLACA_VEICULO: plate,
      PROFISSAO,
      QUANT_CELULAR,
      RELACIONAMENTO,
      RUBRICA,
      SEXO,
      SOLUCAO,
      STATUS,
      TIPOPESSOA,
      TIPOVINCULO: involvement,
      UF: state,
      UF_VEICULO,
      VITIMAFATAL
    } = register
    const name = Math.random().toString()
    const email = Math.random().toString()
    try {
      const report = await createReportUseCase.execute({
        dataOcorrencia,
        localOcorrencia: {
          city,
          neighborhood,
          number: number.toString(),
          publicPlace,
          state
        },
        partes: {
          email,
          involvement,
          name
        },
        periodoOcorrencia,
        veiculoFurtado: {
          anoFabricacao: anoFabricacao.toString(),
          cor,
          emplacamento: {
            city: cityVehicle,
            plate: plate.toString(),
            state
          },
          fabricante,
          modelo: modelo.toString(),
          tipoVeiculo
        }
      })
      return report
    } catch (e) {
      console.log(e)
    }
  })
}
