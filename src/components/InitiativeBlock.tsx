import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'
import TextField from './fields/TextField'
import NumberField from './fields/NumberField'

interface Props {
  announce: Function,
  initiative: Initiative
}

export default (props: Props) => {
  if (isUndefined(props.initiative)) {
    return null
  }

  const { value, name, health } = props.initiative

  const announceValue = (attribute: string) => (value: string) => {
    props.announce({ [attribute]: value })
  }

  return (
    <div>
      <TextField value={name} announce={announceValue('name')} />
      <NumberField value={value} announce={announceValue('value')} />
      <NumberField value={health} announce={announceValue('health')} />
    </div>
  )
}
