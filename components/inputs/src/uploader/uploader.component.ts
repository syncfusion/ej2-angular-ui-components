import { Component, ElementRef, ViewContainerRef, ValueProvider, Renderer2, Injector, ChangeDetectionStrategy, forwardRef, ContentChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, FormBase, setValue } from '@syncfusion/ej2-angular-base';
import { Uploader } from '@syncfusion/ej2-inputs';
import { Template } from '@syncfusion/ej2-angular-base';
import { FilesDirective } from './files.directive';

export const inputs: string[] = ['allowedExtensions','asyncSettings','autoUpload','buttons','cssClass','directoryUpload','dropArea','dropEffect','enablePersistence','enableRtl','enabled','files','htmlAttributes','locale','maxFileSize','minFileSize','multiple','sequentialUpload','showFileList','template'];
export const outputs: string[] = ['focus', 'blur', 'actionComplete','beforeRemove','beforeUpload','canceling','change','chunkFailure','chunkSuccess','chunkUploading','clearing','created','failure','fileListRendering','pausing','progress','removing','rendering','resuming','selected','success','uploading'];
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
@ComponentMixins([ComponentBase, FormBase])
export class UploaderComponent extends Uploader implements IComponentBase {
    public formCompContext : any;
    public formContext : any;
    public tagObjects: any;
	actionComplete: any;
	beforeRemove: any;
	beforeUpload: any;
	canceling: any;
	change: any;
	chunkFailure: any;
	chunkSuccess: any;
	chunkUploading: any;
	clearing: any;
	created: any;
	failure: any;
	fileListRendering: any;
	pausing: any;
	progress: any;
	removing: any;
	rendering: any;
	resuming: any;
	selected: any;
	success: any;
	public uploading: any;
    public childFiles: any;
    public tags: string[] = ['files'];
    /** 
     * Specifies the HTML string that used to customize the content of each file in the list.
     * 
     * > For more information, refer to the [template](../../uploader/template/) section from the documentation.
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
        this.formContext  = new FormBase();
        this.formCompContext  = new ComponentBase();
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
        this.formCompContext.ngOnInit(this);
    }

    public ngAfterViewInit(): void {
        this.formContext.ngAfterViewInit(this);
    }

    public ngOnDestroy(): void {
        this.formCompContext.ngOnDestroy(this);
    }

    public ngAfterContentChecked(): void {
        this.tagObjects[0].instance = this.childFiles;
        this.formCompContext.ngAfterContentChecked(this);
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}

