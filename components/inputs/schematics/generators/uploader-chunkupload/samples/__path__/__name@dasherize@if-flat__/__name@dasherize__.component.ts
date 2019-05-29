import { Component, ViewEncapsulation } from '@angular/core';
import { RemovingEventArgs } from '@syncfusion/ej2-angular-inputs';

/**
 * Chunk Upload sample
 */
@Component({
    selector: '<%=dasherize(selector)%>',
    templateUrl: '<%=dasherize(name)%>.component.html',
    styleUrls: ['<%=dasherize(name)%>.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class <%= classify(name) %>Component {

    public path: Object = {
        saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
        chunkSize: 500000
    };

    public onFileRemove(args: RemovingEventArgs): void {
        args.postRawFile = false;
    }
}
