import { useAntClient, useAntContext } from '@antcde/react-utils'

/**
 * Shows how to extract contextual information from ANT OS. It will give you understanding of which, license, project and task are selected.
 * @constructor
 */

export function Greet() {
  let client = useAntClient()
  const user = useAntContext('user')
  const name = user ? (user.name?.trim() ?? `${user.firstname} ${user.lastname}`).trim() : ''
  const locale = (user?.language ?? 'en').toLocaleUpperCase()

  return <div style={{
    border: '1px dotted gray',
    padding: '10px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <h3>Hi {name}!</h3>
    <p>Your locale is: {locale}</p>
    <button onClick={() => client.signal({ navigate: { to: 'OS.profile' } })}>Go to profile</button>
  </div>

}