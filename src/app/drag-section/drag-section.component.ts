import { Component, OnInit } from '@angular/core';
import { ElementsBuilderType } from '../form-builder/elements';

@Component({
  selector: 'app-drag-section',
  templateUrl: './drag-section.component.html',
  styleUrls: ['./drag-section.component.scss'],
})
export class DragSectionComponent implements OnInit {
  elements: ElementsBuilderType[] = [
    { id: '1', name: 'Button' },
    { id: '2', name: 'Card' },
    { id: '3', name: 'Checkbox' }];

  constructor() { }

  ngOnInit(): void {
  }
}
