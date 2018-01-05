import * as LineActions from './line.actions';

import { Post } from '../models/post.model';

export interface State {
  line: Post[];
}

const initialState: State = {
  line: []
};

export function lineReducer(state = initialState, action: LineActions.LineActions) {
  switch (action.type) {
    case LineActions.SHOW_LINE:
      return {
        ...state,
        line: [...action.payload.line]
      };
    default:
      return state;
  }
}
