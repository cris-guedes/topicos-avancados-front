import { GetServerSidePropsContext } from 'next'
import ReportById from '../../Components/report/report'
import { initializeApollo } from '../../shared/apollo/client'
import { LOAD_REPORTS_BY_ID } from '../../shared/graphql/queries/reports'
import { Report } from '../../src/domain/entities/report'

type Props = {
  report: Report
}

function ReportDetails({ report }: Props) {
  return <ReportById report={report} />
}

export default ReportDetails

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo()
  const reportId = context.query.id
  const {
    data: { loadReportById }
  } = await apollo.query({
    query: LOAD_REPORTS_BY_ID,
    variables: {
      reportId
    }
  })

  return {
    props: {
      report: loadReportById
    }
  }
}
