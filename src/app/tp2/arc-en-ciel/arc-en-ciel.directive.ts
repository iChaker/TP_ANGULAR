import {Directive, Host, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {
  colorTable: string[];
  @HostBinding('style.color') color = '';
  @HostBinding('style.border-color') borderColor = ''
  constructor() {
    this.colorTable = [
     '#FFFFFF', '#76235D', '#233C76', '#23763C', '#DDE849'
    ];
  }

  @HostListener('keydown') keydown() {
     const colorRand = Math.floor(0x1000000 * Math.random()).toString(16);
     this.color = '#' + ('000000' + colorRand).slice(-6) ;
  }


}
