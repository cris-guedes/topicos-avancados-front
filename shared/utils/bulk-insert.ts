import makeCreateReport from '../../src/domain/useCases/createReport'
import * as data from './csvjson.json'

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
const register: any = data

const createReportUseCase = makeCreateReport()
register.map(async (data: Register) => {
  const {
    ANO_BO,
    ANO_FABRICACAO,
    ANO_MODELO,
    BAIRRO: neighborhood,
    BO_AUTORIA,
    BO_EMITIDO,
    BO_INICIADO,
    CIDADE: city,
    CIDADE_VEICULO,
    CORCUTIS,
    DATACOMUNICACAO,
    DATAELABORACAO,
    DATANASCIMENTO,
    DATAOCORRENCIA: dataOcorrencia,
    DELEGACIA_CIRCUNSCRICAO,
    DELEGACIA_NOME,
    DESCRICAOLOCAL,
    DESCR_COR_VEICULO,
    DESCR_MARCA_VEICULO,
    DESCR_TIPO_VEICULO,
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
    PERIDOOCORRENCIA,
    PLACA_VEICULO,
    PROFISSAO,
    QUANT_CELULAR,
    RELACIONAMENTO,
    RUBRICA,
    SEXO,
    SOLUCAO,
    STATUS,
    TIPOPESSOA,
    TIPOVINCULO,
    UF: state,
    UF_VEICULO,
    VITIMAFATAL
  } = data

  return await createReportUseCase.execute({
    dataOcorrencia: null,
    localOcorrencia: {
      city: null,
      neighborhood: null,
      number: null,
      publicPlace: null,
      report: null,
      state: null
    },
    partes: {
      email: null,
      involvement: null,
      name: null
    },
    periodoOcorrencia: null,
    veiculoFurtado: {
      anoFabricacao: null,
      cor: null,
      emplacamento: {
        vehicle: null,
        city: null,
        plate: null,
        state: null
      },
      fabricante: null,
      modelo: null,
      tipoVeiculo: null
    }
  })
})``
