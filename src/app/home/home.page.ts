import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    contentObservable: Observable<any[]>;
    selectedValue = 'VALUE2';

    constructor() {}

    ngOnInit() {
        const sampleData = [
            {
                'text': 'ITEM1',
                'value': 'VALUE1'
            },
            {
                'text': 'ITEM2',
                'value': 'VALUE2'
            }
        ];
        this.contentObservable = of(sampleData).pipe(delay(1000));
    }
}
