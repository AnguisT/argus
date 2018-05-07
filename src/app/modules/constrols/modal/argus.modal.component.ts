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
    public modalEvents: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild('target', { read: ViewContainerRef }) vcRef: ViewContainerRef;
    componentRef: ComponentRef<any>;

    constructor(private resolver: ComponentFactoryResolver,
                @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory(this.data.component);
        this.componentRef = this.vcRef.createComponent(factory);
    }

    emitClickFooterBtn(name: string, $event: any) {
        this.modalEvents.emit({
            name: name,
            $event: $event
        });
    }

//   openDialog(): void {
//     let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: { name: this.name, animal: this.animal }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
}
