import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    EventEmitter,
    ChangeDetectorRef
} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'argus-accordion',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusAccordionComponent {

    @Input('data') private data: any;

    constructor() {}
}
