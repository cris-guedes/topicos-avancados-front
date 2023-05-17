import { Report } from '../../../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function ReportByCityDetails({ reports }: Props) {
  return (
    <div>
      <h1>
        {reports.map((report) => (
          <>{report.id}</>
        ))}
      </h1>
      <div></div>
    </div>
  )
}

export default ReportByCityDetails
