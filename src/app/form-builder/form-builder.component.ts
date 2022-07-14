import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { selectFormBuilderArray } from '../reducers/actions/builder-actions';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  formBuilderArray$ = this.store.select(selectFormBuilderArray);

  htmlEl!: SafeHtml;

  constructor(private store: Store, private sanitizer: DomSanitizer) {
  }

  // eslint-disable-next-line class-methods-use-this
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
    this.formBuilderArray$.subscribe((el) => {
      let tags: any = [];
      el?.forEach((e) => {
        const tag = e.nameHTMLEl;
        tags = [...tags, tag];
      });
      console.log(el);
      console.log(tags);

      this.htmlEl = this.sanitizer.bypassSecurityTrustHtml(tags);
    });
  }
}
