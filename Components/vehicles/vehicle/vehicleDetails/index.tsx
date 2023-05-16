import { useRouter } from 'next/router'
import { Vehicle } from '../../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle
}

function VehicleById() {
  const route = useRouter()

  const id = route.query.Id
  return (
    <div>
      <h1>{id}</h1>
      <div></div>
    </div>
  )
}

export default VehicleById
