import { ActionReducerMap } from '@ngrx/store';

import * as fromLine from '../posts/store/line.reducers';

export interface AppState {
  lineList: fromLine.State,
}

export const reducers: ActionReducerMap<AppState> = {
  lineList: fromLine.lineReducer,
};
