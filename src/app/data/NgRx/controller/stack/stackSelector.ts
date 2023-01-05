import { createSelector } from '@ngrx/store'
import { StackState } from './stackReducer'

export interface AppState {
  stack: StackState
}

export const selectStack = (state: AppState) => state.stack

export const selectStackData = createSelector(
  selectStack,
  (state: StackState) => state.stacks
)
