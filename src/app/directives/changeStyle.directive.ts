import {
  AfterViewInit,
  Directive, ElementRef, Renderer2, ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appChangeStyle]',
})

export class ChangeStyleDirective implements AfterViewInit {
  @ViewChild('div') div?: ElementRef;

  constructor(private r: Renderer2) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => { console.log(this.div); }, 0);
  }
}
