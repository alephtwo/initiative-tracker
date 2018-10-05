import * as React from 'react'

interface Props {
  announce: Function,
  value: string,
}

export default (props: Props) => {
  const {
    value,
    announce
  } = props

  return (
    <input
      type='text'
      value={value}
      onChange={event => announce(event.target.value)} />
  )
}
