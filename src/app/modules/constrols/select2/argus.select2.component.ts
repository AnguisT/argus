import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter,
    ChangeDetectorRef
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

    @Input('firstEmpty') private firstEmpty: boolean = true;

    @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter<any>();

    constructor(private cdr: ChangeDetectorRef) {}

    ngOnInit() {
        this.init();
    }

    init() {
        let self = this;
        this.compRef = $(this.compRef.nativeElement);
        if (this.multi === false && this.firstEmpty) {
            this.compRef.append($('<option></option>'));
        }
        this.compRef = this.compRef.select2({
            data: self.data,
            width: self.width,
            placeholder: self.placeholder,
            minimumResultsForSearch: self.minimumResultsForSearch,
            allowClear: self.allowClear,
            multiple: self.multi
        });
        this.compRef.unbind('select2:select');
        this.compRef.on('select2:select', function (e: any) {
            self.onSelect.emit(self.getSelected());
        });
    }

    setData(data: any) {
        if (data && data !== '') {
            console.log(data);
            this.data = data;
            this.cdr.detectChanges();
        }
    }

    reInit() {
        this.compRef.select2('destroy');
        this.init();
    }

    getSelected() {
        return this.compRef.val();
    }

    setSelectedById(id: number) {
        this.compRef.val(id).trigger('change');
        this.onSelect.emit(this.getSelected());
    }
}
