import { useRouter } from 'next/router'
import { Report } from '../../../../src/domain/entities/report'

type Props = {
  reports: Report
}

function ReportByCityDetails() {
  const route = useRouter()

  const cityName = route.query.city
  return (
    <div>
      <h1>{cityName}</h1>
      <div></div>
    </div>
  )
}

export default ReportByCityDetails
