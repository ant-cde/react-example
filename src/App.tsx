import { Greet } from './components/greet'
import { DarkMode } from './components/darkMode'
import { Toolbar } from './components/toolbar'
import { Projects } from './components/projects'

export function App() {
  return (
    <main style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '10px',
      overflowY: 'auto',
      height: '100%'
    }}>
      <h1>React demo</h1>
      <p>This is a minimalistic project with the ONLY purpose of explaining how you can connect to the Ant OS and backend. UI and libs are kept simple and minimal.</p>
      <DarkMode />
      <Greet />
      <Toolbar />
      <Projects />
    </main>
  )
}
