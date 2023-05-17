import { GetServerSidePropsContext } from 'next'
import ReportByCityDetails from '../../../Components/report/city/cityDetails'
import { initializeApollo } from '../../../shared/apollo/client'
import { LOAD_REPORTS_BY_CITY_NAME } from '../../../shared/graphql/queries/reports'
import { Report } from '../../../src/domain/entities/report'

type Props = {
  reports: Report[]
}

function CityDetails({ reports }: Props) {
  return <ReportByCityDetails reports={reports} />
}

export default CityDetails

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const apollo = initializeApollo()
  const city = context.query.city
  const {
    data: { loadReportsByCityName }
  } = await apollo.query({
    query: LOAD_REPORTS_BY_CITY_NAME,
    variables: {
      city
    }
  })

  return {
    props: {
      reports: loadReportsByCityName
    }
  }
}
