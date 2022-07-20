import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectAccordionItem, selectShow, selectStyles, Styles,
} from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  accordionItem$ = this.store.select(selectAccordionItem);

  show$ = this.store.select(selectShow);

  accordionData$ = this.store.select(selectStyles);

  accDataItem!: null | Styles;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.accordionData$.subscribe((observable) => {
      this.accDataItem = observable;
    });
  }
}
