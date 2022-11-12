import type { NextPage } from 'next'
import {useEffect, useState} from "react";

type Repository = {
  name: string,
}

const Home: NextPage = () => {
  const [repositories, setRepositories] = useState<string[]>([])
  const [search, setSearch] = useState('')

  // Client-side rendering
  useEffect(() => {
    fetch('https://api.github.com/users/NicolasLOrtiz/repos')
      .then(response => response.json())
      .then(data => setRepositories(data.map((repo: Repository) => repo.name)))
  }, [])

  const filteredRepositories = search.length ? repositories.filter(repo => repo.includes(search)) : repositories

  return (
    <div>
      <h1>Hello Next.js</h1>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
      <ul>
        {filteredRepositories.map(repo => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
