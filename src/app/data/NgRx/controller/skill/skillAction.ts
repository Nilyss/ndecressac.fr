import { createAction, props } from '@ngrx/store'

// Models
import { Skill } from '../../models/skill'

export const initApp = createAction('Init Skills list')

export const getSkills = createAction(
  '[Skills] Get skills',
  props<{ skill: Skill[] }>()
)
