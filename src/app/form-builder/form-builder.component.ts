import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addElement, selectFormBuilderArray, setShow, Element,
} from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  formBuilderArray$ = this.store.select(selectFormBuilderArray);

  constructor(private store: Store) { }

  onShow(): void {
    this.store.dispatch(setShow());
  }

  onDrop(event: CdkDragDrop<Element[] | null>): void {
    if (event.container.data && event.previousContainer.data) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      this.store.dispatch(addElement(
        { elements: event.container.data },
      ));
    }
  }
}
