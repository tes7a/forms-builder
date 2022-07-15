import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent {
  @Input() dragArray$!: Observable<{
    name: string;
    nameHTMLEl: string;
  }[]>;

  constructor() { }
}
