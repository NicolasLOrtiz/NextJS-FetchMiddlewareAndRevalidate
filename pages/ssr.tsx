import type {GetServerSideProps, NextPage} from 'next'

type Repository = {
  name: string,
}

type Props = {
  repositories: string[]
}

const Ssr: NextPage<Props> = ({ repositories }: Props) => {
  return (
    <div>
      <h1>Next.js Server Side Rendering</h1>
      <ul>
        {repositories.map((repo: string) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/NicolasLOrtiz/repos')
  const data = await response.json()
  return {
    props: {
      repositories: data.map((repo: Repository) => repo.name)
    }
  }
}

export default Ssr
