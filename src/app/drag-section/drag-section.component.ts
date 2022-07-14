import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectDragArray } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  dragArray$ = this.store.select(selectDragArray);

  constructor(private store: Store) { }
}
