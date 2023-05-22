import VehicleList from '../../Components/vehicles/vehicle/vehicleList'
import { initializeApollo } from '../../shared/apollo/client'
import { LOAD_VEHICLES } from '../../shared/graphql/queries/vehicles'
import { Vehicle } from '../../src/domain/entities/vehicle'

type Props = {
  vehicles: Vehicle[]
}

function Vehicle({ vehicles }: Props) {
  return <VehicleList vehicle={vehicles} />
}

export default Vehicle

export async function getServerSideProps() {
  const apollo = initializeApollo()

  const {
    data: { loadVehicles }
  } = await apollo.query({
    query: LOAD_VEHICLES
  })

  return {
    props: {
      vehicles: loadVehicles
    }
  }
}
