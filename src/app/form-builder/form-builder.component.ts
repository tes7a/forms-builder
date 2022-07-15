import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  @Input() formBuilderArray$!: Observable<{
    name: string;
    nameHTMLEl: string;
  }[] | null>;

  constructor() { }

  onDrop(event: CdkDragDrop<{
    name: string,
    nameHTMLEl: string
  }[] | null>): void {
    if (event.container.data && event.previousContainer.data) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
