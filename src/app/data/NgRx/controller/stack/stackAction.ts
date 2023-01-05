import { createAction, props } from '@ngrx/store'

// Models
import { Stack } from '../../models/stack'

export const initApp = createAction('Init Stack list')

export const getStack = createAction(
  '[Stack list] Get stack list',
  props<{ stack: Stack[] }>()
)
