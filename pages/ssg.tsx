import type { GetStaticProps, NextPage } from 'next'

type Repository = {
  name: string,
}

type Props = {
  repositories: string[];
  date: Date;
}

const Ssg: NextPage<Props> = ({ repositories, date }: Props) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/NicolasLOrtiz/repos')
  const data = await response.json()
  return {
    props: {
      repositories: data.map((repo: Repository) => repo.name),
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4,
  }
}

export default Ssg
