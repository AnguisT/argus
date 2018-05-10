import {
    Component,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import { ArgusAdvancedService } from './service/argus.advanced.service';
import { ArgusAdvancedProvider } from './provider/argus.advanced.provider';

@Component({
    selector: 'argus-advanced',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ArgusAdvancedService,
        ArgusAdvancedProvider
    ]
})

export class ArgusAdvancedComponent {
    // public dataControl: any;
    // public dataCondition: any;
    // public dataField: any;
    public data: any = {};
    public criteries: Array<any> = [];
    public crit = {control: '', codition: '', field: ''};

    constructor(private advancedProvider: ArgusAdvancedProvider,
                private cdr: ChangeDetectorRef) {
        this.advancedProvider.compContext = this;
        // this.advancedProvider.init();
    }

    ngOnInit() {
        // let self = this;
        // this.advancedProvider.getData().subscribe((data: any) => {
        //     self.data.dataControl = data;
        //     self.onSelect(1);
        // });
    }

    addCriteria() {
        this.criteries.push(this.crit);
    }

    removeCriteria(i: number) {
        this.criteries.splice(i, 1);
    }

    onSelectCondition($event: any) {

    }

    onSelectField($event: any) {

    }
}
