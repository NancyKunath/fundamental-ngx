import { Directive, forwardRef } from '@angular/core';
import { CONTENT_DENSITY_DIRECTIVE, DeprecatedCompactDirective } from '@fundamental-ngx/core/content-density';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'fd-radio-button[compact]',
    providers: [
        {
            provide: CONTENT_DENSITY_DIRECTIVE,
            useExisting: forwardRef(() => DeprecatedRadioButtonCompactDirective)
        }
    ]
})
export class DeprecatedRadioButtonCompactDirective extends DeprecatedCompactDirective {
    constructor() {
        super('fd-radio-button');
    }
}
