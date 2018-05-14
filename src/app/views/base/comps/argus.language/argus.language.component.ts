import { Component, ViewEncapsulation, Input } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'argus-language',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

export class ArgusTranslateComponent {
    constructor(private translate: TranslateService) {}

    public changeOnRu() {
        this.translate.use('ru-RU');
    }

    public changeOnEn() {
        this.translate.use('en-EN');
    }
}
