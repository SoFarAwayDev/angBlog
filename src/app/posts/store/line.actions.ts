import { Action } from '@ngrx/store';

import { Post } from '../models/post.model';

export const GET_LINE = 'GET_LINE';
export const SHOW_LINE = 'SHOW_LINE';



export class GetLine implements Action {
  readonly type = GET_LINE;
}

export class ShowLine implements Action {
  readonly type = SHOW_LINE;

  constructor(public payload: {line: Post[]}) {}
}


export type LineActions = GetLine | ShowLine;
