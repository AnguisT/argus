import {
    ChangeDetectionStrategy,
    Component,
    Injector,
    ViewEncapsulation,
    ViewChild,
    EventEmitter
} from '@angular/core';
import { ArgusGridProvider } from '../../provider/argus.grid.provider';
import { MatExpansionPanel } from '@angular/material';

@Component({
    selector: 'expansion-panel-comp',
    templateUrl: './tpl/index.html',
    styleUrls: [
        'styles/index.scss'
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})

export class ArgusExpansionPanelComponent {
    public panelOpenState: boolean;
    public params: any;
    private gridProvider: ArgusGridProvider;
    public toggleExpand: EventEmitter<boolean> = new EventEmitter<boolean>();
    @ViewChild('expansivePanel') public expansivePanel: any;
    @ViewChild('panel') public panel: MatExpansionPanel;

    constructor() {}

    ngOnInit() {
        // console.log(this.params);
    }
}
