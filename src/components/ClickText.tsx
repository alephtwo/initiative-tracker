import * as React from 'react'

interface Props {
  announceValue: Function,
  value: string | number
}

interface State {
  editable: boolean
}

export default class ClickText extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = { editable: false }
  }

  render () {
    const { value, announceValue } = this.props
    const { editable } = this.state

    return (
      <input
        type='text'
        value={value}
        readOnly={!editable}
        onClick={() => this.setState({ editable: true })}
        onBlur={() => this.setState({ editable: false })}
        onChange={event => announceValue(event.target.value)} />
    )
  }
}
