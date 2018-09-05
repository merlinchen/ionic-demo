import {AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'app-custom-item',
    templateUrl: 'custom-item.component.html',
    styleUrls: ['custom-item.component.scss'],
})
export class CustomItem implements AfterViewInit {
    @Input() item: string;
    @ViewChild('itemContainer', {read: ViewContainerRef}) itemContainer: ViewContainerRef;
    @ViewChild('labelTpl', {read: TemplateRef}) labelTpl: TemplateRef<any>;

    ngAfterViewInit() {
        this.itemContainer.createEmbeddedView(this.labelTpl, {
            $implicit: this.item
        });
    }
}
