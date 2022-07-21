import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeStyle,
  closeAccordion,
  selectAccordionItem, selectShow,
} from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent {
  accordionItem$ = this.store.select(selectAccordionItem);

  show$ = this.store.select(selectShow);

  constructor(private store: Store) {
  }

  onClose(): void {
    this.store.dispatch(closeAccordion());
  }

  onInput(event: Event, id: string) {
    this.store.dispatch(changeStyle({
      id,
      value: (<HTMLInputElement>event.target).value,
    }));
  }
}
