import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'
import ClickText from './ClickText'

interface Props {
  announceValue: Function,
  initiative: Initiative
}

const toNumber = (value: string) => parseInt(value || '0', 10)

export default (props: Props) => {
  const generateAnnounceValue =
    (attribute: string, transformValue: Function = (a: any) => a) =>
      (value: string) => {
        props.announceValue({ [attribute]: transformValue(value) })
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
        announceValue={generateAnnounceValue('value', toNumber)} />
      <ClickText
        value={health}
        announceValue={generateAnnounceValue('health', toNumber)} />
    </div>
  )
}
