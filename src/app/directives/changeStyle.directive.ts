import {
  AfterContentChecked,
  Directive, ElementRef, Input, Renderer2, ViewContainerRef,
} from '@angular/core';
import { Styles } from '../reducers/actions/builder-actions';

@Directive({
  selector: '[appChangeStyle]',
  exportAs: 'appChangeStyle',
})

export class ChangeStyleDirective implements AfterContentChecked {
  @Input() accItem!: Styles;

  constructor(private el: ElementRef, private r: Renderer2) { }

  ngAfterContentChecked(): void {
    console.log(this.el);

    // if (this.accItem) {
    //   this.r.setStyle(this.el.nativeElement, 'color', this.accItem.colorInputRGB);
    //   this.r.setStyle(this.el.nativeElement, 'fontWeight', this.accItem.fontWeightSelect);
    //   this.el.nativeElement.innerHTML = this.accItem.placeholderText;
    // }
  }
}
