import { Action, createReducer, on } from '@ngrx/store'

// Models
import { Skill } from '../../models/skill'

// Actions
import * as SkillActions from './skillAction'

export interface SkillState {
  skills: Skill[]
}

export const initialState = {
  skills: [],
}

export const skillReducer = createReducer(
  initialState,
  on(SkillActions.initApp, (state) => {
    return {
      ...state,
    }
  }),
  on(SkillActions.getSkills, (state, props) => {
    return {
      ...state,
      skills: props.skill,
    }
  })
)

export function SkillReducer(state: SkillState, action: Action) {
  return skillReducer(state, action)
}
