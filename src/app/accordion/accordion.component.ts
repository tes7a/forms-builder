import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectShow } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  items = [''];

  expandedIndex = 0;

  show$ = this.store.select(selectShow);

  constructor(private store: Store) { }
}
