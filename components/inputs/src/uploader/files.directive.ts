import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['name', 'size', 'type'];
let outputs: string[] = [];
/**
 * 'e-files' directive represent a file of angular uploader 
 * It must be contained in a Uploader component(`ejs-uploader`). 
 * ```html
 * <ejs-uploader id='fileupload' multiple=true> 
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
@Directive({
    selector: 'e-files>e-uploadedfiles',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class UploadedFilesDirective extends ComplexBase<UploadedFilesDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the type of the file
     * @default ''
     */
    public type: any;
    /** 
     * Specifies the name of the file
     * @default ''
     */
    public name: any;
    /** 
     * Specifies the size of the file
     * @default null
     */
    public size: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * UploadedFiles Array Directive
 * @private
 */
@Directive({
    selector: 'ejs-uploader>e-files',
    queries: {
        children: new ContentChildren(UploadedFilesDirective)
    },
})
export class FilesDirective extends ArrayBase<FilesDirective> {
    constructor() {
        super('files');
    }
}