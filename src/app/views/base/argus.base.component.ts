import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import 'style-loader!@angular/material/prebuilt-themes/indigo-pink.css';
import { Router } from '@angular/router';

@Component({
    selector: 'argus-base',
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

    goHome() {
        this.router.navigate(['']);
    }
}
