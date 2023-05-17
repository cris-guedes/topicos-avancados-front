import { useRouter } from 'next/router'
import { Vehicle } from '../../../src/domain/entities/vehicle'

type Props = {
  vehicles: Vehicle[]
}

function VehicleByColor({ vehicles }: Props) {
  const route = useRouter()

  const color = route.query.color
  return (
    <div>
      <h1>{color}</h1>
      <div>
        {vehicles.map((vehicle) => (
          <li>{vehicle.cor}</li>
        ))}
      </div>
    </div>
  )
}

export default VehicleByColor
