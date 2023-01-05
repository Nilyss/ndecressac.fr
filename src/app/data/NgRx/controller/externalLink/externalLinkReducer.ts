import { Action, createReducer, on } from '@ngrx/store'

// Models
import { ExternalLink } from '../../models/externalLink'

// Actions
import * as ExternalLinkActions from './externalLinkAction'

export interface ExternalLinkState {
  externalLink: ExternalLink[]
}

export const initialState = {
  externalLink: [],
}

export const externalLinkReducer = createReducer(
  initialState,
  on(ExternalLinkActions.initApp, (state) => {
    return {
      ...state,
    }
  }),
  on(ExternalLinkActions.getExternalLink, (state, props) => {
    return {
      ...state,
      externalLink: props.externalLink,
    }
  })
)

export function ExternalLinkReducer(state: ExternalLinkState, action: Action) {
  return externalLinkReducer(state, action)
}
