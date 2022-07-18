import {
  createAction, createFeatureSelector, createReducer, createSelector, on, props,
} from '@ngrx/store';

// actions

export const setShow = createAction('[SET-SHOW]  setShow');
export const addElement = createAction('[ADD-ELEMENT] addElement', props<{ elements: Element[] }>());

// state

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
  show: false,
};

// reducer

export const builderReducer = createReducer(
  initialState,
  on(setShow, (state): BuilderState => ({ ...state, show: !state.show })),
  on(
    addElement,
    (state, action): BuilderState => ({
      ...state,
      formBuilderArray: [...action.elements],
    }),
  ),
);

// selectors

export const selectFeature = createFeatureSelector<BuilderState>('builder');

export const selectFormBuilderArray = createSelector(
  selectFeature,
  (state) => state.formBuilderArray && state.formBuilderArray.map((el) => el),
);

export const selectDragArray = createSelector(
  selectFeature,
  (state) => state.dragArray.map((el) => el),
);

export const selectShow = createSelector(
  selectFeature,
  (state) => state.show,
);

// types

export interface BuilderState {
  dragArray: {
    name: string,
    nameHTMLEl: string
  }[],
  formBuilderArray: {
    name: string,
    nameHTMLEl: string
  }[] | null,
  show: boolean,
}

export interface Element {
  name: string;
  nameHTMLEl: string;
}
