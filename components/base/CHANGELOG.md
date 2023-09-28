# Changelog

## [Unreleased]

## 23.1.38 (2023-09-26)

### Common

#### Bug Fixes

- `#I488912` - Resolved the `ngModel` data binding not working properly in Form Base.

## 23.1.36 (2023-09-15)

### Common

#### Bug Fixes

- `#I486549` - Provided `clearTemplates` support for `Accordion` Component.
- `#F45098`, `#I497414` - Resolved the `Complex Directives` property changes not being applied properly.
- `#I496453` - Resolved the `Template` binding not working properly in Form Base.
- `#I473932` - Resolved the `Angular Form` states not working properly for the `OnPush` strategy.

## 22.1.34 (2023-06-21)

### Common

#### New Features

- Provided the TypeScript 5 compatible support for the Angular components.

## 21.1.41 (2023-04-18)

### Common

#### Bug Fixes

- `#I454892` - The issue with the `ng-template` not working properly has been resolved.
- `#I444984` - Resolved the script error while rendering Rich text editor component in the `NgbModel`.

## 21.1.38 (2023-04-04)

### Common

#### Bug Fixes

- `#I444984` - Resolved Form base components `Set` and `Reset` not working properly.
- `#F180294` - Improved the component rendering delay in the `ngAfterViewInit` hook.

## 20.4.40 (2022-12-28)

### Common

#### Bug Fixes

- `#I426526`, `#I421906` - The issue with the delay rendering of controls in the `ngAfterViewInit` hook has been resolved.

## 20.4.38 (2022-12-21)

### Common

#### New Features

- Provided the Angular version 15 compatible support for the Angular components.
- The new `Rating` component has been added to Angular.
- The `AppBar`, `Floating Action Button (FAB)`, `Mention`, `Message` and `Speed Dial` components have been developed to meet industry standards and are now marked production-ready.

#### Breaking Changes

- If you are using Syncfusion's Angular components without first registering a license, a license dialog will appear after a certain limit of usage, preventing further interaction in the application. Please make sure to register a valid license in order to continue using the Syncfusion Angular components without interruption.

## 20.3.47 (2022-09-29)

### Common

#### New Features

- Provided the schematic ng add support for Syncfusion Angular IVY packages.

#### Bug Fixes

- `#I358566` - The issue with the `ng-template` not working in the Karma unit test has been resolved.
- `#I392021` - The issue with the "Gantt header template image is not shown in the stack blitz sample" has been resolved.

## 20.2.36 (2022-06-30)

### Common

#### Breaking Changes

- From this release, Syncfusion provided the Ivy-compatible support for the Angular packages. Ivy Angular packages support Angular versions 12 and above. While using the latest Angular packages in the Angular 11 and below version application, components will not work. To provide the latest features and fixes for Angular versions 11 and below, Syncfusion will maintain the Angular packages tagged with `ngcc`. To install Angular packages that are compatible with `ngcc` for the Angular versions 11 and below application, run the `npm install @syncfusion/ej2-angular-grids@ngcc` command.

#### New Features

- Syncfusion components are now compatible with Angular 14 version.
- Provided the Ivy-compatible support for the Angular packages. Ivy Angular packages support Angular versions 12 and above.
- Provided the TypeScript 4.7 compatible support for the Angular components.
- Provided the option to register the license key by using the `npx` command. Follow these steps to register the license using the `npx` command:

| The `npx` command | 
|---|
| Install the Syncfusion packages from `npm`. | 
| Add the license key either in the environment variable `SYNCFUSION_LICENSE` or in the `syncfusion-license.txt` text file. | 
| Run the command `npx syncfusion-license activate` to automatically register the license. |

## 19.1.56 (2021-04-13)

### Common

#### Bug Fixes

- `I313360` - Resolved `NgFor dynamic proprty` change not working for `tab` component.

## 19.1.54 (2021-03-30)

### Common

#### Bug Fixes

- `I306436,I313360` - Resolved `dynamic property` change not working for `Tab` component.
- Resolved script error while using `clearTemplate` method.

## 18.4.48 (2021-03-23)

### Common

#### Bug Fixes

- `I312916,I316685` - Resolved script error When resetting form controls to non-null values, if the elements are no longer in the DOM.

## 18.4.46 (2021-03-02)

### Common

#### Bug Fixes

- `I306436` - Resolved `dynamic property` change not working for complex directives.

## 18.4.44 (2021-02-23)

### Common

#### Bug Fixes

- Resolved script error when set to null value to form group.

## 18.4.43 (2021-02-16)

### Common

#### Bug Fixes

- `I307728` - Provided performance improvement on complex directives.
-  `I312275` - Resolved Script error while unsubscribing events on `OnDestroy` hook.

## 18.4.41 (2021-02-02)

### Common

#### Bug Fixes

- `I313011` - Increased `peerDependencies` version from `10.1.0` to `11.1.1`.

## 18.4.34 (2021-01-12)

### Common

#### Bug Fixes

- Fixed ngFor databinding items have property losses if `directives` have child content template property.

## 18.4.30 (2020-12-17)

### Common

#### Bug Fixes

- Resolved `Dirty & Pristine` value is not updated properly when resetting the form.

## 18.2.56 (2020-09-01)

### Common

#### Bug Fixes

- `I283512` - Resolved `Dynamic value` binding not working for component base components.

## 18.2.48 (2020-08-04)

### Common

#### Bug Fixes

- `I283512` - Resolved `Dynamic value` binding not working for component base components.

## 18.2.44 (2020-07-07)

### Common

#### Bug Fixes

- `I275509,I274538,I278435` - Fixed ngFor databinding not worked while dynamically add items. 

## 18.1.42 (2020-04-01)

### Common

#### Bug Fixes

- Resolved components not get rendered when we disable IVY in angular 9.

## 18.1.36-beta (2020-03-19)

### Common

#### Bug Fixes

- `I261475` - Angular 9 compatibility support.

### Common

#### Bug Fixes

- `I257439` - Increased `peerDependencies` version from `8.2.12` to `8.2.14`.

## 17.3.17 (2019-10-15)

### Common

#### Bug Fixes

- `I251162` - Increased `peerDependencies` version from `8.2.6` to `8.2.10`.

## 17.3.16 (2019-10-09)

### Common

#### Bug Fixes

- `I243740` - Fixed When using container support, the controls inside the `Tab` rendering getting delayed.

## 17.3.9-beta (2019-09-20)

### Common

#### Bug Fixes

- `F147411,I248565` - Cleared `peerDependencies` warning.

## 17.2.49 (2019-09-04)

### Common

#### Bug Fixes

- Fixed `Dynamic datasource` with `ngFor` does not re-render.

## 17.2.39 (2019-07-30)

### Common

#### Bug Fixes

- `#242999` - Fixed `ng-valid` and `ng-invalid` classes are not getting added properly in Angular reactive forms issue.

## 17.2.35 (2019-07-17)

### Common

#### Bug Fixes

- Fixed `CheckBox` not disabling issue.
- Fixed binding not working properly while using `ngx-tanslate` pipe.

## 17.2.28-beta (2019-06-27)

### Common

#### Bug Fixes

- Fixed `CheckBox` not disabling issue.
- Fixed binding not working properly while using `ngx-tanslate` pipe.

## 17.1.53 (2019-06-25)

### Common

- No Changes for this product in this version.

## 17.1.50 (2019-06-04)

### Common

#### New Features

- Provided Angular 8 compatibility support.

## 17.1.49 (2019-05-29)

### Common

#### Bug Fixes

- #2352892 - Fixed `Form base` components delay rendering issue.

## 17.1.47 (2019-05-14)

### Common

#### Bug Fixes

- #227272, #227958 - Fixed binding not working properly while using `ngx-tanslate` pipe.

## 17.1.43 (2019-04-30)

### Common

#### Bug Fixes

- #227272, #227958 - Fixed binding not working properly while using `ngx-tanslate` pipe.

## 17.1.42 (2019-04-23)

### Common

#### Bug Fixes

- #232746, #232286, #233615 , #233849, #233946 - Fixed `template` properties are not working in `production mode` issue.

## 17.1.38 (2019-03-29)

### Common

#### Bug Fixes

- Fixed `CheckBox` not disabling issue.
- Fixed binding not working properly while using `ngx-tanslate` pipe.

## 17.1.32-beta (2019-03-13)

### Common

#### Bug Fixes

- Fixed `CheckBox` not disabling issue.

## 17.1.1-beta (2019-01-29)

### Common

#### Bug Fixes

- Fixed ng-dirty class adding issue when patching object value to control.

## 16.4.45 (2019-01-02)

### Common

#### Bug Fixes

- Fixed `CustomPlacement` typing issue.

## 16.3.32 (2018-11-13)

### Common

#### New Features

- Provided support for Angular version 7.

## 16.3.17 (2018-09-12)

### Common

#### New Features

- Provided Angular [Schematics](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2) support for our Essential JS 2 Angular suite, which performs the below,
- Installs the specific package.
- Import the required modules in `app.module.ts`.

## 16.2.49 (2018-08-21)

### Common

#### Bug Fixes

- Provided renderer support.

## 16.2.48 (2018-08-14)

### Common

#### Bug Fixes

- Fixed Angular `attribute` issue.

## 16.2.47 (2018-08-09)

### Common

#### Bug Fixes

- Provided renderer support.
- Fixed Form component's reset issue.

## 16.2.46 (2018-07-30)

### Common

#### Bug Fixes

- Resolved view encapsulation issue.
- Resolved `onpropertychange` not triggered issue.
- Resolved issue in `EventArgs` passing.

## 16.2.45 (2018-07-17)

### Common

#### New Features

- Provided React 16.4.1 compatibility support

## 16.2.43 (2018-07-03)

### Common

#### Bug Fixes

- Cleared `peerDependencies` warning.

## 16.2.41 (2018-06-25)

### common

#### New Features

- Provided Angular 6 compatibility support

#### Bug Fixes

- Cleared `peerDependencies` warning.

#### Breaking Changes

- The split buttons package used by the component Colour Picker, so the split buttons package is a dependency for the inputs package.

## 16.1.41 (2018-05-09)

### common

#### Bug Fixes

- Propagate touch on `blur` issue is fixed.

## 16.1.38 (2018-05-02)

### Common

#### Bug Fixes

- Now, Date parser will return the `null` value while parsing invalid date string.
- ng base destroy issue is fixed.

## 16.1.37 (2018-04-24)

### Common

#### Bug Fixes

- Performance related issue, when loading more number of chart in angular has been fixed.

## 16.1.35 (2018-04-17)

### Common

#### Bug Fixes

- Adding `annotation` dynamically to the chart is now working.

## 16.1.34 (2018-04-10)

### Common

#### Bug Fixes

- Issue with Calendar date generation in `UTC+00:00` time zone has been fixed.

## 16.1.33 (2018-04-03)

### Common

#### Bug Fixes

- Rendering issue on going with `UTC+00:00` time zone has been fixed.

## 16.1.32 (2018-03-29)

### Common

#### Bug Fixes

- Fixed C# number formatting issue.

#### New Features

- Generating page based unique id for components.

## 16.1.30 (2018-03-20)

### Common

#### Bug Fixes

- Fixed content security policy issue.

## 16.1.29 (2018-03-13)

### Common

#### Bug Fixes

- `Width` property with string type value issue has been fixed.

## 16.1.28 (2018-03-09)

### Common

#### Bug Fixes

- `boolean` data is not supported in list generation issue has been fixed.

## 16.1.24

### Common

#### Breaking Changes

- Changed the Angular component directive prefix as `ejs-[ComponentName]`.

#### New Features

- High contrast theme support.

## 16.1.24 (2018-02-22)

### common

#### New Features

- Angular Universal support added
- Added support for SVG and PDF export.

#### Bug Fixes

- Resolved `clearTemplate` issue.

#### Breaking Changes

- Tag prefix for Angular components is changed from `ej` to `ejs`. For example, `ej-grid` is changed to `ejs-grid`.

## 15.4.30-preview (2018-02-14)

### common

#### Bug Fixes

- Fixed Form component's expression changed on template issue.

## 15.4.27-preview (2018-01-30)

### common

#### Bug Fixes

- Fixed Form component's disabling issue.

## 15.4.26-preview (2018-01-23)

### common

#### Bug Fixes

- Resolved `reactive form reset` issue.

## 15.4.24-preview (2018-01-10)

### Common

#### Bug Fixes

- `data-value` not updated properly for array of string or number inputs bug fixed.

## 15.4.23-preview (2017-12-27)

### common

#### Bug Fixes

- Resolved `this.propagateTouch is not a function` console error.

#### Breaking Changes

- Modified the module bundle file name for ES6 bundling.

#### New Features

- Added typing file for ES5 global scripts (`dist/global/index.d.ts`).

## 15.4.22-preview (2017-12-14)

### common

#### Bug Fixes

- Grouped radio button `ngModel` binding.
- `ngFor` directive not working for component child directive.

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.21-preview (2017-12-08)

### common

#### Bug Fixes

- Form component, form option `updateOn` blur.
- Fixed enable persistence issue in angular

## 15.4.20-preview (2017-12-01)

### Common

#### New Features

- Upgraded TypeScript version to 2.6.2

## 15.4.19-preview (2017-11-23)

### Common

#### Bug Fixes

- Fixed script error for invalid culture input in L10 library.

## 15.4.18-preview (2017-11-16)

### Common

#### Bug Fixes

- Removed duplicate injected modules on component refresh.

## 15.4.17-preview (2017-11-13)

Base library provide options to enable following Angular functionalities in Essential JS 2 components.

- Input and Output Binding
- Angular Templating
- Ahead-Of-Time (AOT) Compilation
- Defining Injectable Modules
