import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'

interface Props {
  announceValue: Function,
  initiative: Initiative
}

export default (props: Props) => {
  const announceAttribute = (attribute: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      props.announceValue({ [attribute]: event.target.value })
    }
  }

  if (isUndefined(props.initiative)) {
    return null
  }

  const { value, name, health } = props.initiative

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={announceAttribute('name')} />
      <input
        type='text'
        value={value}
        onChange={announceAttribute('value')} />
      <input
        type='text'
        value={health}
        onChange={announceAttribute('health')} />
    </div>
  )
}
