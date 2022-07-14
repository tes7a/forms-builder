import {
  createAction, createFeatureSelector, createReducer, createSelector, on,
} from '@ngrx/store';

export const map = createAction('[BUILDER] map');

export interface BuilderState {
  dragArray: string[],
  formBuilderArray: string[] | null,
}

export const initialState: BuilderState = {
  dragArray: ['Button', 'Input', 'CheckBox'],
  formBuilderArray: [],
};

export const builderReducer = createReducer(
  initialState,
  on(map, (state) => ({
    ...state,
    formBuilderArray: state.dragArray.map((el) => el),
  })),
);

export const selectFeature = createFeatureSelector<BuilderState>('builder');

export const selectFormBuilderArray = createSelector(
  selectFeature,
  (state) => state.formBuilderArray && state.formBuilderArray.map((el) => el),
);

export const selectDragArray = createSelector(
  selectFeature,
  (state) => state.dragArray.map((el) => el),
);
