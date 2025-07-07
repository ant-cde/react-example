import { useAntContext } from '@antcde/react-utils'

export function DarkMode() {
  const { darkMode } = useAntContext()
  const text = darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'

  return <div  style={{ border: '1px dotted gray', padding: '10px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h3>{text}</h3>
    <p>Press double `ctrl` and `k` to switch the color mode</p>
  </div>
}
