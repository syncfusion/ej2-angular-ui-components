# Angular Modern Rich Text Editor

> **Using this package with an AI coding agent**
>
> Before generating Syncfusion code, ask your AI coding agent to run the Syncfusion setup using the following prompt:
>
> ```text
> Set up this project for Syncfusion before generating code. Fetch
> and follow the official instructions at https://ai.syncfusion.com,
> then report the detected platform, installed skill pack, MCP
> status, and any required licensing action.
> ```
> The setup detects your project’s platform and loads the appropriate Syncfusion skill pack. No Syncfusion account or MCP key is required to install or read Syncfusion agent skills.
>
> **Platform reference:** [https://ai.syncfusion.com/angular/llms.txt](https://ai.syncfusion.com/angular/llms.txt)

The [Angular Modern Rich Text Editor](https://www.syncfusion.com/rich-text-editor-sdk/angular-rich-text-editor-ui) introduces a modern, extensible WYSIWYG editing experience built on the **Headless Editor**, with **ProseMirror** providing the underlying document model and editing engine. It is designed for applications such as document authoring, email composition, CMS platforms, blogs, knowledge bases, messaging, and business applications, providing a flexible foundation for creating and managing rich content.

<div align="center">
    <h4>
        <a href="https://help.syncfusion.com/rich-text-editor-sdk/angular/rich-text-editor-ui/getting-started">📖Getting started</a> &#x2022;
        <a href="https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor-ui/full-featured-editing">🚀Online demos</a> &#x2022;
        <a href="https://www.syncfusion.com/rich-text-editor-sdk/angular-rich-text-editor-ui">🌐Learn more</a>
    </h4>
</div>

![Angular Modern Rich Text Editor](https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/angular/rich-text-editor-ui.webp)

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Bootstrap logo">
  </a>
</p>

## ⚡️ Quick Start

This guide uses the Angular CLI as the development environment for the Angular Modern Rich Text Editor. Install [Node.js](https://nodejs.org/), and the [Angular CLI](https://github.com/angular/angular-cli), before proceeding.

### Create an Angular application

To set up the Angular CLI globally, run the following command.

```sh
npm install -g @angular/cli
```

Then create a new application:

```sh
ng new my-app
```

This command prompts you to configure the stylesheet format, Server-Side Rendering (SSR/SSG), and AI tooling options. Select the options that best fit the project.

Navigate to the project folder:

```sh
cd my-app
```

### Install the Modern Rich Text Editor package

The `@syncfusion/ej2-angular-richtexteditor-ui` package supports Angular 14 and later.

```sh
npm install @syncfusion/ej2-angular-richtexteditor-ui --save
```

> The Modern Rich Text Editor requires the [`@syncfusion/ej2-headless-editor`](https://www.npmjs.com/package/@syncfusion/ej2-headless-editor) npm package, which provides the underlying ProseMirror-based document model and editing engine.

### Add the CSS reference

Install the Syncfusion<sup>®</sup> Tailwind 3 theme package:

```sh
npm install @syncfusion/ej2-tailwind3-theme --save
```

Then add the following CSS reference to the `src/styles.css` file:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/richtexteditor-ui/index.css';
```

### Add the Modern Rich Text Editor component with required modules

Add the Modern Rich Text Editor component to the `src/app/app.ts` file with the `RichTextEditorUIModule` imported into the standalone component's `imports` array, inject the Slash Commands module using the `providers` array, and add the control's HTML elements to the component `template`:

```typescript

import { Component } from '@angular/core';
import {
  RichTextEditorUIModule,
  SlashCommandService
} from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RichTextEditorUIModule],
  providers: [SlashCommandService],
  template: `
    <ejs-richtexteditor-ui
      id="editor"
      height="300px"
      [toolbarSettings]="toolbarSettings"
      [slashCommandSettings]="{ enable: true }">
    </ejs-richtexteditor-ui>
  `
})
export class App {
  public toolbarSettings = {
    items: [
      'Undo', 'Redo', '|', 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', '|',
      'FontColor', 'BackgroundColor', '|',
      'Formats', 'Alignment', '|',
      'Link', 'Image', 'Table', '|',
      'NumberedList', 'BulletList', '|',
      'Quote', 'ClearFormat'
    ]
  };
}
```

<blockquote>
    <p>ℹ️ <b>Note:</b></p>
    <span>The example above registers only the required service (<code>SlashCommandService</code>) to keep the bundle size small. For detailed information on module injection, refer to the Syncfusion<sup>®</sup> Modern Rich Text Editor <a href="https://help.syncfusion.com/rich-text-editor-sdk/angular/rich-text-editor-ui/getting-started">Documentation</a>.</span>
</blockquote>

### Run the application

```sh
ng serve --open
```

Now, open your project in a browser, and the Modern Rich Text Editor will be displayed! 🚀

## 🛠️ Supported frameworks

The Modern Rich Text Editor component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg"  height="50" />](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: |

## 🏗️ Showcase samples

* [Angular Modern Rich Text Editor Email Composer demo](https://ej2.syncfusion.com/demos/angular/#/tailwind3/rich-text-editor-ui/email-composer)
* [Angular Modern Rich Text Editor editing Forum Post demo](https://ej2.syncfusion.com/demos/angular/#/tailwind3/rich-text-editor-ui/forum-post-editor)
* [Angular Modern Rich Text Editor HTML Preview demo](https://ej2.syncfusion.com/demos/angular/#/tailwind3/rich-text-editor-ui/html-preview)

## ✨ Key features

* **Rich Text Formatting** - Apply common text styles such as bold, italic, underline, strikethrough, subscript, superscript, fonts, and colors. It enables rich content authoring with a familiar formatting toolbar.

* **Block Formatting** - Format content using headings, paragraphs, block quotes, code blocks, callouts, horizontal rules, and collapsible sections. It helps structure long-form documents with semantic blocks.

* **Lists** - Create bulleted, numbered, and checklist lists with multiple styles and indentation support. They are useful for organizing steps, items, and tasks in content.

* **Text Alignment** - Align content to the left, center, right, or justify. It supports consistent visual presentation across documents.

* **Automatic Markdown Formatting** - Automatically apply rich text formatting when typing common Markdown syntax for headings, lists, emphasis, code, and other supported content. It bridges Markdown shortcuts with a WYSIWYG experience.

* **Link Management** - Insert, edit, open, copy, and remove links using contextual editing actions. It keeps link references accurate and easy to manage.

* **Image Editing** - Insert, update, replace, and remove images with support for captions, alt text, alignment, wrapping, and dimensions. It provides rich media control inside the editor.

* **Table Editing** - Create and manage tables with row, column, header, cell formatting, alignment, and deletion options. It supports structured tabular content authoring.

* **Flexible Toolbar** - Configure automatic, expanded, multi-row, or scrollable toolbar layouts to suit different screen sizes and editing needs. It keeps the editing experience responsive and uncluttered.

* **Quick Toolbars** - Provide contextual actions for links, images, tables, and other selected content. It speeds up common operations without leaving the editing area.

* **Slash Commands** - Quickly find and execute editor actions by typing `/` within the editing area. It enables keyboard-first content insertion and formatting.

* **Undo and Redo** - Manage editing history with configurable undo and redo behavior. It improves editing confidence by making changes easier to correct.

* **Keyboard Shortcuts** - Configure custom keyboard shortcuts to support efficient editing workflows. It helps power users move faster through content.

* **Placeholder and Read-only** - Display placeholder text for empty content and restrict editing when read-only mode is enabled. It supports templates, previews, and gated editing experiences.

* **Module injection** - Module injection lets the editor load only the features that are needed. It helps reduce bundle size and keeps the component more efficient.

* **ProseMirror-based engine** - Built on top of the Syncfusion Headless Editor, which uses ProseMirror for the underlying document model and editing engine. It provides a robust, extensible foundation for rich content.

## 📚 Resources

* [Documentation](https://help.syncfusion.com/rich-text-editor-sdk/angular/rich-text-editor-ui/getting-started)
* [Theme Studio](https://ej2.syncfusion.com/themestudio/)
* [Custom Resource Generator](https://crg.syncfusion.com/)
* [What's New](https://www.syncfusion.com/products/whatsnew/rich-text-editor-sdk?utm_medium=listing&utm_source=github)
* [Road Map](https://www.syncfusion.com/products/roadmap/essential-js2?utm_medium=listing&utm_source=github)
* [E-Books](https://www.syncfusion.com/ebooks?tag=javascript&utm_medium=listing&utm_source=github)

## 🤝 Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/rich-text-editor-sdk?utm_source=npm&utm_medium=listing&utm_campaign=angular-rich-text-editor-ui-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-angular-ui-controls/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/angular?utm_source=npm&utm_medium=listing&utm_campaign=angular-rich-text-editor-ui-npm)
* Live chat

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/rich-text-editor-sdk?utm_source=npm&utm_medium=listing&utm_campaign=angular-rich-text-editor-ui-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-angular-ui-controls/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/angular?utm_source=npm&utm_medium=listing&utm_campaign=angular-rich-text-editor-ui-npm)
* Live chat

## 🔄 Change log
 
Check the changelog [here](https://github.com/syncfusion/ej2-angular-ui-components/blob/master/components/rich-text-editor-ui/CHANGELOG.md). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## Other Popular Angular Components

Explore other popular Syncfusion<sup>®</sup> Angular components curated from UI components, standalone SDKs, and document solution suites.

<table>
    <tr>
        <td align="center">
            <a href="https://www.syncfusion.com/angular-components/angular-data-grid">Angular DataGrid</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/angular-components/angular-charts">Angular Charts</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/angular-components/angular-file-manager">Angular File Manager</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/gantt-sdk/angular-gantt-chart">Angular Gantt Chart</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/diagram-sdk/angular-diagram">Angular Diagram</a>
        </td>
    </tr>
    <tr>
        <td align="center">
            <a href="https://www.syncfusion.com/scheduler-sdk/angular-scheduler">Angular Scheduler</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/docx-editor-sdk/angular-docx-editor">Angular DOCX Editor</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer">Angular PDF Viewer</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/spreadsheet-editor-sdk/angular-spreadsheet-editor">Angular Spreadsheet Editor</a>
        </td>
        <td align="center">
            <a href="https://www.syncfusion.com/angular-components/angular-maps-library">Angular Maps</a>
        </td>
    </tr>
</table>

## ⚖️ License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 140+ [Angular UI components](https://www.syncfusion.com/angular-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community license is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=angular-rich-text-editor-ui-npm) for more info.

© Copyright 2026 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> license and copyright applies to this distribution.
