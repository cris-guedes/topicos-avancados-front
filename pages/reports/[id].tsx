import { GetServerSidePropsContext } from 'next'
import ReportById from '../../Components/report/report'
import { initializeApollo } from '../../shared/apollo/client'
import { LOAD_REPORTS_BY_ID } from '../../shared/graphql/queries/reports'
import { LoadReportByIdView } from '../../src/domain/useCases/loadReportById/loadReportsByIdView'

type Props = {
  report: LoadReportByIdView
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
