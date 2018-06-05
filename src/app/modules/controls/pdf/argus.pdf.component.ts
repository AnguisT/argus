import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    EventEmitter,
    ChangeDetectorRef
} from '@angular/core';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
    selector: 'argus-pdf',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusPdfComponent {

    public isShow: boolean = false;
    public isLoaded: boolean = false;

    @Input('fileName') private fileName: string;

    @Input('src') private src: string;

    constructor(private location: Location) {}

    showPdfFile() {
        this.isShow = true;
    }

    goToBack() {
        this.location.back();
    }
}
