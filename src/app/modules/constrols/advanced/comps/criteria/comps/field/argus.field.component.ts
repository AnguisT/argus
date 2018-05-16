import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    Input,
    ViewChild,
    EventEmitter,
    Output,
    ChangeDetectorRef
} from '@angular/core';
import { ArgusSelect2Component } from '../../../../../select2/argus.select2.component';
import { ArgusAdvancedProvider } from '../../../../provider/argus.advanced.provider';
import { ArgusCriteriaComponent } from '../../argus.criteria.component';

@Component({
    selector: 'argus-field',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArgusFieldComponent {
    private inputString: string = '';
    private type = {isComboMulti: false, isComboSingle: false, isTextBox: true};
    @Input('context') private compContext: ArgusCriteriaComponent;
    @Output('onSelectField') private onSelectField: EventEmitter<any> = new EventEmitter<any>();
    @Input('data') private data: any;
    @ViewChild('select') private select: ArgusSelect2Component;

    constructor(private advancedProvider: ArgusAdvancedProvider,
                private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        let self = this;
        this.compContext.dataFieldReady.subscribe((data: any) => {
            switch (data.type) {
                case 'ComboMulti':
                    self.type.isComboMulti = true;
                    self.type.isComboSingle = false;
                    self.type.isTextBox = false;
                    break;
                case 'ComboSingle':
                    self.type.isComboMulti = false;
                    self.type.isComboSingle = true;
                    self.type.isTextBox = false;
                    break;
                default:
                    self.type.isComboMulti = false;
                    self.type.isComboSingle = false;
                    self.type.isTextBox = true;
                    break;
            }
            this.cdr.detectChanges();
            if (data.type !== 'TextBox') {
                self.select.setData(data.data);
            }
        });
    }

    // ngAfterViewInit() {
    //     this.select.setData(this.data);
    // }

    onSelect($event: any) {
        this.onSelectField.emit($event);
    }
}
