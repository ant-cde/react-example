import { useAntClient } from '@antcde/react-utils'

export function ModeToggles() {
  const client = useAntClient()

  return <div style={{
    border: '1px dotted gray',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
  }}>
    <button onClick={() => client.signal.send({ immersive: { mode: 'toggle' } })}>Toggle immersive mode</button>
    <button onClick={() => client.signal({ notepad: { action: 'toggle' } })}>Toggle notepad</button>
  </div>
}