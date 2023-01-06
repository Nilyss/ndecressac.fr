import { createSelector } from '@ngrx/store'
import { SkillState } from './skillReducer'

export interface AppState {
  skill: SkillState
}

export const selectSkill = (state: AppState) => state.skill

export const selectSkillData = createSelector(
  selectSkill,
  (state: SkillState) => state.skills
)
