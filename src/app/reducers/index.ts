import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { builderReducer, BuilderState } from './actions/builder-actions';

export interface State {
  builder: BuilderState
}

export const reducers: ActionReducerMap<State> = {
  builder: builderReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
