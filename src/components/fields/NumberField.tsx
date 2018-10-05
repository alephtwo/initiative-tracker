import * as React from 'react'

interface Props {
  announce: Function,
  value: number,
}

export default (props: Props) => {
  const {
    value,
    announce
  } = props

  return (
    <input
      type='number'
      value={value}
      onChange={event => announce(parseInt(event.target.value, 10))} />
  )
}
