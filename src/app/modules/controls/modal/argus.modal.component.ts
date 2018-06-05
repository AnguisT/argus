import {
    Component,
    ViewEncapsulation,
    Input,
    ChangeDetectionStrategy,
    ViewChild,
    Output,
    EventEmitter,
    Inject,
    ComponentRef,
    ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';
import * as $ from 'jquery';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'argus-modal',
    templateUrl: './tpl/index.html',
    styleUrls: [
        './styles/index.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ArgusModalComponent {
    public buttonTitle: string = 'OK';
    public modalEvents: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;
    componentRef: ComponentRef<any>;

    constructor(private resolver: ComponentFactoryResolver,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(this.data.component);
        this.componentRef = this.vcRef.createComponent(factory);
        if (this.data.buttonTitle) {
            this.buttonTitle = this.data.buttonTitle;
        }
    }

    emitClickFooterBtn(name: string, $event: any) {
        this.modalEvents.emit({
            name: name,
            $event: $event
        });
    }
}
