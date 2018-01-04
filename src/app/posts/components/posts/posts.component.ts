import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../models/post.model';
import * as LineActions from '../../store/line.actions';
import * as fromApp from '../../../store/app.reducers';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  lineListState: Observable<{line: Post[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LineActions.GetLine());
    this.lineListState = this.store.select('lineList');
  }

}
