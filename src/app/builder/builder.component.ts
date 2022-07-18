import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent {
  constructor(private store: Store) {
  }
}
