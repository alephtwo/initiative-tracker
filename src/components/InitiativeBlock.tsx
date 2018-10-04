import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'
import ClickText from './ClickText'

interface Props {
  announceValue: Function,
  initiative: Initiative
}

export default (props: Props) => {
  const generateAnnounceValue = (attribute: string) => (value: string) => {
    props.announceValue({ [attribute]: value })
  }

  if (isUndefined(props.initiative)) {
    return null
  }

  const { value, name, health } = props.initiative

  return (
    <div>
      <ClickText
        value={name}
        announceValue={generateAnnounceValue('name')} />
      <ClickText
        value={value}
        announceValue={generateAnnounceValue('value')} />
      <ClickText
        value={health}
        announceValue={generateAnnounceValue('health')} />
    </div>
  )
}
