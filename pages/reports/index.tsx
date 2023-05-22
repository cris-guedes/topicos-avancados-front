import ReportList from '../../Components/report/reportList'
import { initializeApollo } from '../../shared/apollo/client'
import { LOAD_REPORTS } from '../../shared/graphql/queries/reports'
import { Report } from '../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function Report() {
  return <ReportList />
}

export default Report
