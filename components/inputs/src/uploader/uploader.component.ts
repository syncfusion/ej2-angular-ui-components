import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Uploader } from '@syncfusion/ej2-inputs';
import { Template } from '@syncfusion/ej2-angular-base';
import { FilesDirective } from './files.directive';

export const inputs: string[] = ['allowedExtensions','asyncSettings','autoUpload','buttons','directoryUpload','dropArea','enablePersistence','enableRtl','enabled','files','locale','maxFileSize','minFileSize','multiple','showFileList','template'];
export const outputs: string[] = ['focus', 'blur', 'canceling','change','chunkFailure','chunkSuccess','clearing','created','failure','pausing','progress','removing','resuming','selected','success','uploading'];
export const twoWays: string[] = [];

/**
 * Represents the EJ2 Angular Uploader Component.
 * ```html
 * <ejs-uploader></ejs-uploader>
 * ```
 */
@Component({
    selector: 'ejs-uploader',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UploaderComponent),
            multi: true
        }
    ],
    queries: {
        childFiles: new ContentChild(FilesDirective)
    }
})
export class UploaderComponent extends Uploader implements IComponentBase {
    public childFiles: any;
    public tags: string[] = ['files'];

    /** 
     * Specifies the HTML string that used to customize the content of each file in the list.
     * 
     * > For more information, refer to the [template](./template.html) section from the documentation.
     *     
     * @default null
     */
    @ContentChild('template')
    @Template()
    public template: any;

    public focus: any;
    public blur: any;
    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];

        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public registerOnChange(registerFunction: (_: any) => void): void {
    }

    public registerOnTouched(registerFunction: () => void): void {
    }

    public writeValue(value: any): void {
    }
    
    public setDisabledState(disabled: boolean): void {
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

applyMixins(UploaderComponent, [ComponentBase, FormBase]);
