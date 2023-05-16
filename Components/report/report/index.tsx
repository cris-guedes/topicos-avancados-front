import { useRouter } from 'next/router'
import { Report } from '../../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function ReportById() {
  const route = useRouter()
  const { id } = route.query
  return (
    <div>
      <h1>{id}</h1>
      <div></div>
    </div>
  )
}

export default ReportById
