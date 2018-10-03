import { List } from 'immutable'
import { Initiative } from './Initiative'

export interface AppState {
  initiatives: List<Initiative>
}
