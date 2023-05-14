import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  //const { data, error, isLoading } = useSwr<User[]>('/api/users', fetcher)

  return <ul></ul>
}
