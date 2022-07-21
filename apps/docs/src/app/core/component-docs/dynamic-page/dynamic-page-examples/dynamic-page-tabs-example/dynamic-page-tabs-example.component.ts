import { Component } from '@angular/core';

@Component({
    selector: 'fd-dynamic-page-tabs-example',
    templateUrl: './dynamic-page-tabs-example.component.html',
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageTabsExampleComponent {
    visible = false;

    stackedTabs = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(stacked: boolean): void {
        this.stackedTabs = stacked;
        this.visible = true;
    }

    closePage(): void {
        this.visible = false;
    }
}
