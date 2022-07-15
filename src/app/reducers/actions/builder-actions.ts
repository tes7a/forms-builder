import {
  createAction, createFeatureSelector, createReducer, createSelector, on,
} from '@ngrx/store';

export const map = createAction('[BUILDER] map');

export interface BuilderState {
  dragArray: {
    name: string,
    nameHTMLEl: string
  }[],
  formBuilderArray: {
    name: string,
    nameHTMLEl: string
  }[] | null,
}

export const initialState: BuilderState = {
  dragArray: [
    { name: 'Button', nameHTMLEl: '<button>Button</button>' },
    { name: 'Input', nameHTMLEl: '<input placeholder="Text"/>' },
    { name: 'CheckBox', nameHTMLEl: '<input type="checkbox"/> <label>Options</label>' },
    { name: 'Textarea', nameHTMLEl: '<textarea placeholder="Text"></textarea>' },
    {
      name: 'Select',
      nameHTMLEl:
    '<select><option value="value1">Значение 1</option><option value="value2">Значение 2</option><option value="value3">Значение 3</option></select>',
    },
  ],
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
