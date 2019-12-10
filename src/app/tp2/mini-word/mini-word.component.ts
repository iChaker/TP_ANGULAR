import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  textColor: any;
  textSize: any;
  textSizePx: any;
  textFont: any;
  fontFamilies: any;
  constructor() {
    this.textColor = 'black';
    this.textSize = 15 ;
    this.textSizePx = this.textSize + 'px';
    this.textFont = 'Comic Sans MS';

    this.fontFamilies = [
      {id: 1, name: 'Arial Black'},
      {id: 2, name: 'Comic Sans MS'},
      {id: 3, name: 'Lucida Sans Unicode'},
      {id: 4, name: 'Verdana'},];
  }

  ngOnInit() {
  }
  changeSize() {
    this.textSizePx = this.textSize + 'px';
  }


}
