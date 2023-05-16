import { useRouter } from 'next/router'
import { Vehicle } from '../../../../src/domain/entities/vehicle'

type Props = {
  vehicle: Vehicle
}

function VehicleList() {
  const route = useRouter()

  return (
    <div>
      <h1>{'vehicle'}</h1>
      <div></div>
    </div>
  )
}

export default VehicleList
