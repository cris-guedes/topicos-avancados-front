import { useRouter } from 'next/router'
import { Report } from '../../../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function ReportByPeriod({ reports }: Props) {
  const route = useRouter()

  const period = route.query.period
  return (
    <div>
      <h1>{period}</h1>
      <div>
        {reports.map((report) => (
          <li>{report.id}</li>
        ))}
      </div>
    </div>
  )
}

export default ReportByPeriod
