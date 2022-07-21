import { Component } from '@angular/core';

@Component({
    selector: 'fd-dynamic-page-responsive-example',
    templateUrl: './dynamic-page-responsive-example.component.html',
    styleUrls: ['../dynamic-page-example.component.scss']
})
export class DynamicPageResponsiveExampleComponent {
    visible = false;

    pageTitle = 'Balenciaga Tripple S Trainers';

    compact = true;

    onCollapseChange(): void {
        console.log('collapse changed');
    }

    openPage(): void {
        this.visible = true;
    }

    closePage(): void {
        this.visible = false;
    }
}
