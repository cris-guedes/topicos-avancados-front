import { GetServerSidePropsContext } from 'next'
import VehicleByPlate from '../../../Components/vehicles/plate'
import { initializeApollo } from '../../../shared/apollo/client'
import { LOAD_VEHICLES_BY_PLATE_NUMBER } from '../../../shared/graphql/queries/vehicles'
import { LoadVehicleByPlateNumberView } from '../../../src/domain/useCases/loadVehicleByPlateNumber/loadVehicleByPlateNumberView'

type Props = {
  vehicle: LoadVehicleByPlateNumberView
}

function VehiclesPlate({ vehicle }: Props) {
  return <VehicleByPlate vehicle={vehicle} />
}

export default VehiclesPlate

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo()

  const plate = context.query.plate

  const {
    data: { loadVehicleByPlateNumber }
  } = await apollo.query({
    query: LOAD_VEHICLES_BY_PLATE_NUMBER,
    variables: {
      plateNumber: plate
    }
  })

  return {
    props: {
      vehicle: loadVehicleByPlateNumber
    }
  }
}
