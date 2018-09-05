import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    items: any = [];

    ngOnInit() {
        for (let i = 0; i < 30; i++) {
            this.items.push(i);
        }
    }
}
