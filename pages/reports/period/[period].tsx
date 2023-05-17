import { GetServerSidePropsContext } from 'next'
import { Report } from '../../../src/domain/entities/report'
import ReportByPeriod from '../../../Components/report/period/periodDetails'
import { initializeApollo } from '../../../shared/apollo/client'
import { LOAD_REPORTS_BY_PERIOD } from '../../../shared/graphql/queries/reports'

type Props = {
  reports: Report[]
}

function ReportDetails({ reports }: Props) {
  return <ReportByPeriod reports={reports} />
}

export default ReportDetails

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo()
  const period = context.query.period
  console.log(period)
  const {
    data: { loadReportsByPeriod }
  } = await apollo.query({
    query: LOAD_REPORTS_BY_PERIOD,
    variables: {
      period
    }
  })

  return {
    props: {
      reports: loadReportsByPeriod
    }
  }
}
