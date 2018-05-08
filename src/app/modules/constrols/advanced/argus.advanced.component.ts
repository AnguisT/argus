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
    public dataControl: any;
    public dataCondition: any;
    public dataField: any;

    constructor(private advancedProvider: ArgusAdvancedProvider,
                private cdr: ChangeDetectorRef) {
        this.advancedProvider.compContext = this;
        // this.advancedProvider.init();
    }

    ngOnInit() {
        this.onSelect(1);
    }

    onSelect($event: any) {
        let self = this;
        this.advancedProvider.getDataById($event).subscribe((data: any) => {
            console.log(data);
            self.dataCondition = [data];
            self.dataField = [data];
            self.cdr.detectChanges();
        });
    }

    onSelectCondition($event: any) {

    }

    onSelectField($event: any) {

    }
}
