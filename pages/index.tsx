import type { NextPage } from 'next'
import {useEffect, useState} from "react";

type Repository = {
  name: string,
}

const Home: NextPage = () => {
  const [repositories, setRepositories] = useState<string[]>([])

  // Client-side rendering
  useEffect(() => {
    fetch('https://api.github.com/users/NicolasLOrtiz/repos')
      .then(response => response.json())
      .then(data => setRepositories(data.map((repo: Repository) => repo.name)))
  }, [])

  return (
    <div>
      <h1>Hello Next.js</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
