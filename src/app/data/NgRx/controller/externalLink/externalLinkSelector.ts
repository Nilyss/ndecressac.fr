import { createSelector } from '@ngrx/store'
import { ExternalLinkState } from './externalLinkReducer'

export interface AppState {
  externalLink: ExternalLinkState
}
export const selectExternalLink = (state: AppState) => state.externalLink

export const selectExternalLinkData = createSelector(
  selectExternalLink,
  (state: ExternalLinkState) => state.externalLink
)
