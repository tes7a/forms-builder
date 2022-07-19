import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAccordionItem, selectShow, selectStyles } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  accordionItem$ = this.store.select(selectAccordionItem);

  show$ = this.store.select(selectShow);

  accordionData$ = this.store.select(selectStyles);

  constructor(private store: Store) { }
}
