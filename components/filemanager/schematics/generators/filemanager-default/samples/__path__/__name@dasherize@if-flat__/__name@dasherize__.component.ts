import { Component } from '@angular/core';

@Component({
  selector: '<%=dasherize(selector)%>',
  templateUrl: '<%=dasherize(name)%>.component.html',
  styleUrls: ['<%=dasherize(name)%>.component.css'],
})
export class <%= classify(name) %>Component {
  public hostUrl: string = 'https://ng2jq.syncfusion.com/ej2services/';
  public ajaxSettings: object = {
    url: this.hostUrl + 'api/FileManager/FileOperations',
    getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
    uploadUrl: this.hostUrl + 'api/FileManager/Upload',
    downloadUrl: this.hostUrl + 'api/FileManager/Download'
  };
  public navigationPaneSettings: object = {
    visible: false
  };
  public toolbarSettings: object = {
    visible: false
  };

}