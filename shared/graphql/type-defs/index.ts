import { mergeTypeDefs } from '@graphql-tools/merge'
import { partType } from './part'
import { addressType } from './address'
import { reportType } from './report'
import { vehicleType } from './vehicle'
import { CarRegistrationType } from './car-registration'

export default mergeTypeDefs([
  partType,
  addressType,
  reportType,
  vehicleType,
  CarRegistrationType
])
