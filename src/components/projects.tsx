import { useQuery } from '@tanstack/react-query'
import { useAntClient, useAntContext } from '@antcde/react-utils'
import { Project } from '@antcde/connect-ts'
import { useState } from 'react'


export function Projects() {
  const { connect } = useAntClient()
  const license = useAntContext('license')
  const [fetchCount, setfetchCount] = useState(0)
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects', license?.id, fetchCount],
    queryFn: () => connect.projects.getProjects(license!.id),
    enabled: fetchCount > 0 && !!license?.id
  })

  return <div style={{
    border: '1px dotted gray',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <button
      aria-busy={isLoading}
      disabled={isLoading || !license?.id}
      onClick={() => setfetchCount(prev => prev + 1)}
    >
      Download projects
    </button>
    {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    <ul>
      {projects.map((project: Project) => (<li key={project.id}>{project.name}</li>))}
    </ul>
  </div>
}