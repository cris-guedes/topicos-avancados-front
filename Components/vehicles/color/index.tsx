import { useRouter } from 'next/router'
import { Vehicle } from '../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle
}

function VehicleByColor() {
  const route = useRouter()

  const color = route.query.color
  return (
    <div>
      <h1>{color}</h1>
      <div></div>
    </div>
  )
}

export default VehicleByColor
