import { createAction, props } from '@ngrx/store'

// Models
import { ExternalLink } from '../../models/externalLink'

export const initApp = createAction('Init External Link')

export const getExternalLink = createAction(
  '[External Link] Get External Link',
  props<{ externalLink: ExternalLink[] }>()
)
