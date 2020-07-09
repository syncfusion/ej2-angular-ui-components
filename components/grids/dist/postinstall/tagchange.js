var fs = require("fs");
var glob = require("glob");

var selectors = ['ejs-grid','ejs-pager'];

if (process.env.tagName !== undefined) {
  var newTagPrefix = process.env.tagName.trim();
  var files = glob.sync("./@syncfusion/*");
  for (var i = 0; i < files.length; i++) {
    var sourceFile = fs.readFileSync(files[i], "utf8");
    for (var j = 0; j < selectors.length; j++) {
      selectors[j] = selectors[j].replace('[','').replace(']','');
      var tagRegex = new RegExp(selectors[j], "g");
      sourceFile = sourceFile.replace(tagRegex,selectors[j].replace("ejs", newTagPrefix));
    }
    fs.writeFileSync(files[i], sourceFile, "utf8");
  }
}
