import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import 'style-loader!ag-grid/dist/styles/ag-grid.css';
import 'style-loader!ag-grid/dist/styles/ag-theme-material.css';
import 'style-loader!ag-grid/dist/styles/theme-material.css';
import 'style-loader!@angular/material/prebuilt-themes/indigo-pink.css';
import { Router } from '@angular/router';

@Component({
    selector: 'argus-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss',
    ]
})

export class ArgusBaseComponent {

  constructor(private translate: TranslateService,
              private router: Router) {
    this.translate.use('ru-RU');
  }

  ngOnInit() {
    // console.log('base component');
  }

  goHome() {
      this.router.navigate(['']);
  }
}
