import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDragArray, selectFormBuilderArray } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent {
  formBuilderArray$ = this.store.select(selectFormBuilderArray);

  dragArray$ = this.store.select(selectDragArray);

  constructor(private store: Store) { }
}
