import { useRouter } from 'next/router'
import { Vehicle } from '../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle
}

function VehicleByPlate({ vehicle }: Props) {
  const route = useRouter()

  const plate = route.query.plate
  return (
    <div>
      <h1>{plate}</h1>
      <div>{vehicle.id}</div>
    </div>
  )
}

export default VehicleByPlate
