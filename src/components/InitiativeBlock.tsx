import * as React from 'react'
import { Initiative } from '../interfaces/Initiative';
import { isUndefined } from 'util';

interface Props {
  initiative: Initiative | undefined
}

export default (props: Props) => {
  if (isUndefined(props.initiative)) {
    return null
  }

  return null;
}
