import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import {
  Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import {
  selectFormBuilder, openAccordion, Element,
  selectElement, deleteElement,
  dragElement,
  selectMoveElements,
} from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormBuilderComponent {
  moveElements$ = this.store.select(selectMoveElements);

  formBuilder$ = this.store.select(selectFormBuilder);

  @ViewChild('div') div!: ElementRef;

  constructor(private store: Store, private r: Renderer2) { }

  onShow(id: string): void {
    this.store.dispatch(openAccordion());
    this.onSelect(id);
  }

  onDelete(id: string): void {
    this.store.dispatch(deleteElement({ id }));
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

  onLoaded(arg: { el: ElementRef }): void {
    const newDiv = this.r.createElement('button');
    const textEle = this.r.createText('Button');
    this.r.appendChild(newDiv, textEle);
    this.r.addClass(newDiv, 'form-btn-default');
    // this.r.setStyle(newDiv, 'border', '1px solid red');
    // this.r.setAttribute(newDiv, 'type', 'checkbox');
    this.r.appendChild(arg.el.nativeElement, newDiv);
  }
}
