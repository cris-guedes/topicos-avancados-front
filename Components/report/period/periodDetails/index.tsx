import { useRouter } from 'next/router'
import { Report } from '../../../../src/domain/entities/report'

type Props = {
  reports: Report
}

function ReportByPeriod() {
  const route = useRouter()

  const period = route.query.period
  return (
    <div>
      <h1>{period}</h1>
      <div></div>
    </div>
  )
}

export default ReportByPeriod
