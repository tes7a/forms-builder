import {
  createAction, createFeatureSelector, createReducer, createSelector, on, props,
} from '@ngrx/store';
import * as uuid from 'uuid';

// actions

export const openAccordion = createAction('[OPEN-ACCORDION]  openAccordion');
export const closeAccordion = createAction('[CLOSE-ACCORDION]  closeAccordion');
export const dragElement = createAction('[ADD-ELEMENT] dragElement', props<{ elements: Element[] }>());
export const selectElement = createAction('[SELECT-ELEMENT] selectElement', props<{ id: string }>());
export const deleteElement = createAction('[DELETE-ELEMENT] deleteElement', props<{ id: string }>());
export const changeStyle = createAction('[CHANGE-STYLE] changeStyle', props<{ value: string, id: string }>());

// state

export const initialState: BuilderState = {
  moveElements: [
    {
      name: 'Button',
      nameHTMLEl: '<button class="form-btn-default" id="btn">Button</button>',
      styles: {
        idHTML: '#btn',
        height: '',
        width: '',
        placeholderText: '',
        borderStyle: '',
        fontSize: '',
        fontWeightSelect: '',
        colorInputRGB: '',
      },
    },
    {
      name: 'Input',
      nameHTMLEl: '<input placeholder="Text" id="input" class="form-inp-default"/>',
      styles: {
        idHTML: '#input',
        height: '',
        width: '',
        placeholderText: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeightSelect: '',
        colorInputRGB: '',
      },
    },
    {
      name: 'CheckBox',
      nameHTMLEl: '<input type="checkbox" id="check"/> <label>Options</label>',
      styles: {
        idHTML: '#check',
        height: '',
        width: '',
        placeholderText: '',
        borderStyle: '',
        fontSize: '',
        fontWeightSelect: '',
        colorInputRGB: '',
      },
    },
    {
      name: 'Textarea',
      nameHTMLEl: '<textarea placeholder="Text" id="txtar" class="form-inp-txtar"></textarea>',
      styles: {
        idHTML: '#txtar',
        height: '',
        width: '',
        placeholderText: '',
        required: '',
        borderStyle: '',
        fontSize: '',
        fontWeightSelect: '',
        colorInputRGB: '',
      },
    },
    {
      name: 'Select',
      nameHTMLEl:
        '<select id="select" class="form-inp-sl"><option value="value1">Значение 1</option><option value="value2">Значение 2</option><option value="value3">Значение 3</option></select>',
      styles: {
        idHTML: '#select',
        height: '',
        width: '',
        placeholderText: '',
        borderStyle: '',
        fontSize: '',
        fontWeightSelect: '',
        colorInputRGB: '',
      },
    },
  ],
  formBuilder: [],
  show: false,
  accordionItem: [],
};

// reducer

export const builderReducer = createReducer(
  initialState,
  on(openAccordion, (state): BuilderState => ({ ...state, show: true })),
  on(closeAccordion, (state): BuilderState => ({ ...state, show: false })),
  on(
    dragElement,
    (state, action): BuilderState => ({
      ...state,
      formBuilder: [...action.elements].map((obj) => ({ ...obj, id: uuid.v4() })),
    }),
  ),
  on(selectElement, (state, action): BuilderState => {
    const arr = state.formBuilder?.filter((el) => el.id === action.id) || [];
    const { name, id } = arr[0];
    return { ...state, accordionItem: [{ name, id }] };
  }),
  on(deleteElement, (state, action): BuilderState => ({
    ...state,
    formBuilder: state.formBuilder?.filter((el) => el.id !== action.id) || null,
  })),
  on(changeStyle, (state, action): BuilderState => (
    {
      ...state,
      formBuilder: state.formBuilder?.map((el) => (
        el.id === action.id ? { ...el, nameHTMLEl: '' }
          : el)) || null,
    }
  )),
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

// types

export interface BuilderState {
  moveElements: {
    name: string,
    nameHTMLEl: string,
    styles: {
      idHTML: string,
      height: string,
      width: string,
      placeholderText: string,
      required?: string,
      borderStyle: string,
      fontSize: string,
      fontWeightSelect: string,
      colorInputRGB: string,
    }
  }[],
  formBuilder: Element[] | null,
  show: boolean,
  accordionItem: { name: string, id: string }[] | null
}

export interface Element {
  name: string,
  nameHTMLEl: string,
  styles: {
    idHTML: string,
    height: string,
    width: string,
    placeholderText: string,
    required?: string,
    borderStyle: string,
    fontSize: string,
    fontWeightSelect: string,
    colorInputRGB: string,
  }
  id: string,
}
