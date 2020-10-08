import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges{
  @Input() appState:any;
  @HostBinding('class') nomClass: string;

  constructor() {

  }


  ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);

  }

  private formatClass(state: string): string {
    return `state-${state.toLowerCase()}`;
  }

}
