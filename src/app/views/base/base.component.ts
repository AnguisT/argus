import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import 'style-loader!ag-grid/dist/styles/ag-grid.css';
import 'style-loader!ag-grid/dist/styles/ag-theme-material.css';
import 'style-loader!ag-grid/dist/styles/theme-material.css';
import 'style-loader!@angular/material/prebuilt-themes/indigo-pink.css';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './tpl/index.html',
  styleUrls: [
    './styles/index.scss',
  ]
})

export class BaseComponent {

  constructor(private translate: TranslateService) {
    this.translate.use('ru-RU');
  }

  ngOnInit() {
    // console.log('base component');
  }
}
