import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { RecurrenceEditor } from '@syncfusion/ej2-schedule';



export const inputs: string[] = ['cssClass','dateFormat','enablePersistence','enableRtl','firstDayOfWeek','frequencies','locale','maxDate','minDate','selectedType','startDate','value'];
export const outputs: string[] = ['change'];
export const twoWays: string[] = [];

/**
 * `ejs-recurrenceeditor` represents the Angular RecurrenceEditor Component.
 * ```html
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
@Component({
    selector: 'ejs-recurrenceeditor',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {

    }
})
@ComponentMixins([ComponentBase])
export class RecurrenceEditorComponent extends RecurrenceEditor implements IComponentBase {




    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

