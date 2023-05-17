import { Report } from '../../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function ReportList({ reports }: Props) {
  return (
    <div>
      <h1>ReportList</h1>
      <div>
        <ul>
          {reports.map((report) => (
            <li>{report.id}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ReportList
