import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  dragElement, selectFormBuilder, setShow, Element, selectElement,
} from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  formBuilder$ = this.store.select(selectFormBuilder);

  constructor(private store: Store) { }

  onShow(id: string): void {
    this.store.dispatch(setShow());
    this.onSelect(id);
  }

  onSelect(id: string) {
    this.store.dispatch(selectElement({ id }));
  }

  onDrop(event: CdkDragDrop<Element[] | null>): void {
    if (event.container.data && event.previousContainer.data) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.store.dispatch(dragElement(
        { elements: event.container.data },
      ));
    }
  }
}
