import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import { HttpClient} from '@angular/common/http';

import * as LineActions from '../store/line.actions';
import { Post } from '../models/post.model';

@Injectable()
export class LineEffects {
  @Effect()
  lineFetch = this.actions$
    .ofType(LineActions.GET_LINE)
    .switchMap((action: LineActions.GetLine) => {
      return this.httpClient.get<Post[]>('https://just-opposite-thing.firebaseio.com', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (posts) => {

        return {
          type: LineActions.SHOW_LINE,
          payload: {line: posts}
        };
      }
    );

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}
}
