import { Action, createReducer, on } from '@ngrx/store'

// Models
import { Stack } from '../../models/stack'

// Actions
import * as StackActions from './stackAction'

export interface StackState {
  stacks: Stack[]
}

export const initialState = {
  stacks: [],
}

export const stackReducer = createReducer(
  initialState,
  on(StackActions.initApp, (state) => {
    return {
      ...state,
    }
  }),
  on(StackActions.getStack, (state, props) => {
    return {
      ...state,
      stacks: props.stack,
    }
  })
)

export function StackReducer(state: StackState, action: Action) {
  return stackReducer(state, action)
}
