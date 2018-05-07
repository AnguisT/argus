import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import * as $ from 'jquery';
// Loading plugin
import 'select2/dist/js/select2.js';
import 'style-loader!select2/dist/css/select2.min.css';

@Component({
    selector: 'argus-select2',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusSelect2Component {

    @ViewChild('argusSelect2') private compRef: any;

    @Input('selected') private selected: Array<any> = [];

    @Input('data') private data: Array<any> = [];

    @Input('width') private width: string = '300px';

    @Input('placeholder') private placeholder: string = 'Select ...';

    @Input('minimumResultsForSearch') private minimumResultsForSearch: number = 10;

    @Input('multi') private multi: boolean = false;

    @Input('allowClear') private allowClear: boolean = false;

    @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngAfterViewInit() {
        let self = this;
        this.compRef = $(this.compRef.nativeElement);
        if (this.multi === false) {
            this.compRef.append($('<option></option>'));
        }
        this.compRef = this.compRef.select2({
            data: self.data,
            width: '300px',
            placeholder: self.placeholder,
            minimumResultsForSearch: self.minimumResultsForSearch,
            allowClear: self.allowClear
        });

        this.compRef.unbind('select2:select');
        this.compRef.on('select2:select', function (e: any) {
            // console.log(e);
            // e.selected = self.selected;

            self.onSelect.emit(e);

        });
        // let compData = this.compRef.data('select2');
        // console.log(compData);
        // this.setSelected();
    }

    public getSelected() {
        return this.compRef.val();
    }

    setSelected() {
        // debugger;
        // this.compRef.val(null).trigger('change');
    }
}
