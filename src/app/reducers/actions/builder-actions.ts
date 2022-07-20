import {
  createAction, createFeatureSelector, createReducer, createSelector, on, props,
} from '@ngrx/store';
import * as uuid from 'uuid';

// actions

export const setShow = createAction('[SET-SHOW]  setShow');
export const dragElement = createAction('[ADD-ELEMENT] dragElement', props<{ elements: Element[] }>());
export const selectElement = createAction('[SELECT-ELEMENT] selectElement', props<{ id: string }>());
export const deleteElement = createAction('[DELETE-ELEMENT] deleteElement', props<{ id: string }>());

// state

export const initialState: BuilderState = {
  moveElements: [
    {
      name: 'Button',
      nameHTMLEl: '<button>Button</button>',
      styles: {
        placeholderText: '',
        width: '',
        height: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeight: '',
        colorRGB: '',
      },
    },
    {
      name: 'Input',
      nameHTMLEl: '<input placeholder="Text"/>',
      styles: {
        placeholderText: '',
        width: '',
        height: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeight: '',
        colorRGB: '',
      },
    },
    {
      name: 'CheckBox',
      nameHTMLEl: '<input type="checkbox"/> <label>Options</label>',
      styles: {
        placeholderText: '',
        width: '',
        height: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeight: '',
        colorRGB: '',
      },
    },
    {
      name: 'Textarea',
      nameHTMLEl: '<textarea placeholder="Text"></textarea>',
      styles: {
        placeholderText: '',
        width: '',
        height: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeight: '',
        colorRGB: '',
      },
    },
    {
      name: 'Select',
      nameHTMLEl:
        '<select><option value="value1">Значение 1</option><option value="value2">Значение 2</option><option value="value3">Значение 3</option></select>',
      styles: {
        placeholderText: '',
        width: '',
        height: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeight: '',
        colorRGB: '',
      },
    },
  ],
  formBuilder: [],
  show: false,
  accordionItem: [],
  accordionData: null,
};

// reducer

export const builderReducer = createReducer(
  initialState,
  on(setShow, (state): BuilderState => ({ ...state, show: !state.show })),
  on(
    dragElement,
    (state, action): BuilderState => ({
      ...state,
      formBuilder: [...action.elements].map((obj) => ({ ...obj, id: uuid.v4() })),
    }),
  ),
  on(selectElement, (state, action): BuilderState => {
    const arr = state.formBuilder?.filter((el) => el.id === action.id) || [];
    const { styles, name } = arr[0];
    return { ...state, accordionItem: [name], accordionData: styles };
  }),
  on(deleteElement, (state, action): BuilderState => ({
    ...state,
    formBuilder: state.formBuilder?.filter((el) => el.id !== action.id) || null,
  })),
);

// selectors

export const selectFeature = createFeatureSelector<BuilderState>('builder');

export const selectFormBuilder = createSelector(
  selectFeature,
  (state) => state.formBuilder && state.formBuilder.map((el) => el),
);

export const selectMoveElements = createSelector(
  selectFeature,
  (state) => state.moveElements.map((el) => el),
);

export const selectShow = createSelector(
  selectFeature,
  (state) => state.show,
);

export const selectAccordionItem = createSelector(
  selectFeature,
  (state) => state.accordionItem,
);

export const selectStyles = createSelector(
  selectFeature,
  (state) => state.accordionData,
);

// types

export interface BuilderState {
  moveElements: {
    name: string,
    nameHTMLEl: string,
    styles: Styles,
  }[],
  formBuilder: Element[] | null,
  show: boolean,
  accordionItem: string [] | null
  accordionData: Styles | null
}

export interface Element {
  name: string,
  nameHTMLEl: string,
  id: string,
  styles: Styles

}
export interface Styles {
  placeholderText: string,
  width: string,
  height: string,
  required: string,
  borderStyle: string,
  fontSize: string,
  fontWeight: string,
  colorRGB: string,
}
