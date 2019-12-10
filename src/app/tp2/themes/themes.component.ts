import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemesComponent implements OnInit {
  themes: any[];
  themeSelected = 'small';
  constructor() { }

  ngOnInit() {
    this.themes = [
      {
        id: 0,
        name: 'small'
      },
      {
        id: 1,
        name: 'medium'
      },
      {
        id: 2,
        name: 'big'
      }
    ];
  }

}
