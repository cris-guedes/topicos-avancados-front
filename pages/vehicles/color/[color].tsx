import { GetServerSidePropsContext } from 'next'
import VehicleByColor from '../../../Components/vehicles/color'
import { initializeApollo } from '../../../shared/apollo/client'
import { LOAD_VEHICLES_BY_COLOR } from '../../../shared/graphql/queries/vehicles'
import { Vehicle } from '../../../src/domain/entities/vehicle'

type Props = {
  vehicles: Vehicle[]
}

function VehiclesByColor({ vehicles }: Props) {
  return <VehicleByColor vehicles={vehicles} />
}

export default VehiclesByColor

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo()

  const color = context.query.color

  const {
    data: { loadVehicleByColor }
  } = await apollo.query({
    query: LOAD_VEHICLES_BY_COLOR,
    variables: {
      color
    }
  })

  return {
    props: {
      vehicles: loadVehicleByColor
    }
  }
}
