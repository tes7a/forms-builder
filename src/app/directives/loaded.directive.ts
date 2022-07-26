import {
  Directive, ElementRef, EventEmitter, OnInit, Output,
} from '@angular/core';

@Directive({
  selector: '[appLoaded]',
  exportAs: 'appChangeStyle',
})

export class AppLoadedDirective implements OnInit {
  @Output() public loaded = new EventEmitter<{ el: ElementRef }>();

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.loaded.next({ el: this.el });
  }
}
