import { useAntToolbar } from '@antcde/react-utils'
import { useEffect, useState } from 'react'

/**
 * Example of how to communicate with the toolbar. You can add menu items, set the title and add an interactibe search bar.
 *
 * @constructor
 */

export function Toolbar() {
  const [_, setToolbar] = useAntToolbar()
  const [count, setCount] = useState(1)
  const increment = () => setCount(count => count + 1)

  useEffect(
    () => setToolbar((t) => ({
      ...t,
      title: `Count is ${count}`,
      menu: [{ title: 'Increment', icon: 'mdi-plus', onClick: increment }]
    })),
    [count]
  )

  return <div style={{
    border: '1px dotted gray',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <p>You can also click '+' in the toolbar</p>
    <button onClick={increment} data-tooltip="Increment">+</button>
  </div>
}