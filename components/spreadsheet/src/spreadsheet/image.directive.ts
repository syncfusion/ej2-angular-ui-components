import { Directive, ViewContainerRef, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';



let input: string[] = ['height', 'id', 'left', 'src', 'top', 'width'];
let outputs: string[] = [];

@Directive({
    selector: 'e-images>e-image',
    inputs: input,
    outputs: outputs,    
    queries: {

    }
})
export class ImageDirective extends ComplexBase<ImageDirective> {
    public directivePropList: any;
	


    /** 
     * Specifies the height of the image.
     * @default 300
     * @asptype int
     */
    public height: any;
    /** 
     * Specifies image element id.
     * @default ''
     */
    public id: any;
    /** 
     * Specifies the width of the image.
     * @default 0
     * @asptype int
     */
    public left: any;
    /** 
     * Specifies the image source.
     * @default ''
     */
    public src: any;
    /** 
     * Specifies the height of the image.
     * @default 0
     * @asptype int
     */
    public top: any;
    /** 
     * Specifies the width of the image.
     * @default 400
     * @asptype int
     */
    public width: any;

    constructor(private viewContainerRef:ViewContainerRef) {
        super();
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}

/**
 * Image Array Directive
 * @private
 */
@Directive({
    selector: 'e-cell>e-images',
    queries: {
        children: new ContentChildren(ImageDirective)
    },
})
export class ImagesDirective extends ArrayBase<ImagesDirective> {
    constructor() {
        super('image');
    }
}