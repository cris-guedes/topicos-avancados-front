import ReportList from '../../Components/report/reportList'
import { initializeApollo } from '../../shared/apollo/client'
import { LOAD_REPORTS } from '../../shared/graphql/queries/reports'
import { Report } from '../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function Report({ reports }: Props) {
  return <ReportList reports={reports} />
}

export default Report

export async function getServerSideProps() {
  const apollo = initializeApollo()

  const {
    data: { loadReports }
  } = await apollo.query({
    query: LOAD_REPORTS
  })

  return {
    props: {
      reports: loadReports
    }
  }
}
