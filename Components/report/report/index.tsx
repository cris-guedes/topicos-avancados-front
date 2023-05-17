import { Report } from '../../../src/domain/entities/report'

type Props = {
  report: Report
}

function ReportById({ report }: Props) {
  return (
    <div>
      <h1>{report.id}</h1>
      <div></div>
    </div>
  )
}

export default ReportById
