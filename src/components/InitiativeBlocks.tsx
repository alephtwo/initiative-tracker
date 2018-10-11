import * as React from 'react'
import { StyledComponentProps } from '@material-ui/core'
import { DispatchProp } from 'react-redux'
import { List } from 'immutable'
import { Initiative } from '../interfaces/Initiative'
import InitiativeBlock from './InitiativeBlock'

interface Props extends StyledComponentProps, DispatchProp {
  initiatives: List<Initiative>
}

const InitiativeBlocks = (props: Props) => {
  const { initiatives, dispatch } = props

  const uniqueValues = initiatives.map((i: Initiative) => i.value)
    .toOrderedSet()
    .sortBy((a: number) => -a)
    .toList()

  const determineOrder = (value: number) =>
    uniqueValues.findIndex(v => v === value) + 1

  const blocks = initiatives.map((initiative: Initiative, i: number) => {
    const announce = (extensions: Object) => dispatch({
      type: 'UPDATE_INITIATIVE',
      id: initiative.id,
      extensions
    })

    return (
      <InitiativeBlock
        key={initiative.id}
        announce={announce}
        dispatch={dispatch}
        order={determineOrder(initiative.value)}
        initiative={initiative} />
    )
  })

  return <div>{blocks}</div>
}

export default InitiativeBlocks
