import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'argus-advanced',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusAdvancedComponent {
    private dataControl: any = 'Control';
    private dataCondition: any = 'Condition';
    private dataField: any = 'Field';

    constructor() {}
}
