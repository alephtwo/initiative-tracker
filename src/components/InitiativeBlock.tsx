import * as React from 'react'
import { Initiative } from '../interfaces/Initiative'
import { isUndefined } from 'util'

interface Props {
  initiative: Initiative | undefined
}

export default (props: Props) => {
  if (isUndefined(props.initiative)) {
    return null
  }

  const { value, name } = props.initiative

  return (
    <div>
      <input type='text' value={name} readOnly />
      <input type='text' value={value} readOnly />
    </div>
  )
}
