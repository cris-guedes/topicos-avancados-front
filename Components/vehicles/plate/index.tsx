import { useRouter } from 'next/router'
import { Vehicle } from '../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle
}

function VehicleByPlate() {
  const route = useRouter()

  const plate = route.query.plate
  return (
    <div>
      <h1>{plate}</h1>
      <div></div>
    </div>
  )
}

export default VehicleByPlate
