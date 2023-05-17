import { useRouter } from 'next/router'
import { Vehicle } from '../../../../src/domain/entities/vehicle'

type Props = {
  vehicles: Vehicle[]
}

function VehicleList({ vehicles }: Props) {
  const route = useRouter()

  return (
    <div>
      <h1>{'vehicles'}</h1>
      <div>
        <ul>
          {vehicles.map((vehicle) => (
            <li>{vehicle.id}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VehicleList
