import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMoveElements } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  moveElements$ = this.store.select(selectMoveElements);

  constructor(private store: Store) { }
}
