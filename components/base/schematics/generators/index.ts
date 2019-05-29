import * as fsExtra from 'fs-extra';
import * as glob from 'glob';
import * as path from 'path';

let sourcePath;
let emitPath;
let packagePath;
let packageJson;
let packageName;

interface IFileProperties {
    fileContent: string;
    componentName: string;
    sampleName: string;
    templateFilePath: string;
    selector: string;
    className: string;
    templateUrl: string;
    stylesUrl: string;
    strippedPath: string[];
    samplePath: string;
    stylesFilePath: string;
    folderPath: string;
    moduleFilePath: string;
}

export function emitSampleFiles(pkgName: string) {
    packageName = pkgName;

    console.log('\x1b[34m%s\x1b[0m', `INFO: Schematics sample generation for ${packageName} package.`);

    packagePath = path.resolve(__dirname, `../../../../../`);

    if (fsExtra.existsSync(`${packagePath}/package.json`))
        packageJson = fsExtra.readJsonSync(`${packagePath}/package.json`);

    if (packageJson && packageJson.name === packageName &&
        fsExtra.existsSync(`${packagePath}/schematics/collection.json`)) {
        sourcePath = path.resolve(__dirname, `../../../../../ej2-angular-samples`);
        emitPath = path.resolve(__dirname, `../../../../../schematics/generators`);

        const samples = glob.sync(path.join(sourcePath, '**/*.component.ts'));

        if (samples.length) {
            samples.forEach(sample => {
                injectSamplesIntoTemplate(sample);
            })
        } else {
            console.log('\x1b[33m%s\x1b[0m', `WARNING: Schematics samples are not generated, no samples found` +
                ` in the ${packageName.split('angular-')[0] + packageName.split('angular-')[1]} component repository or` +
                ` no samples were copied from component repository.`);
        }
    } else {
        console.log('\x1b[31m%s\x1b[0m', `ERROR: Schematics samples are not generated, either ${packageJson.name} ` +
            `and ${packageName} aren't matching or '{package-root}/schematics/collection.json' file doesn't exists.`);
    }
}

function injectSamplesIntoTemplate(sampleFilePath) {
    generateSchematics(getFileProperties(sampleFilePath));
}

function getFileProperties(sampleFilePath: string): IFileProperties {
    const fileContent = fsExtra.readFileSync(sampleFilePath).toString();
    const strippedPath = sampleFilePath.split('ej2-angular-samples/')[1].split('/');
    const componentName = strippedPath[0].toLowerCase();
    const sampleName = strippedPath[2].split('.')[0].toLowerCase();
    const templateFilePath = sampleFilePath.split('.ts')[0] + '.html';
    const stylesFilePath = sampleFilePath.split('.ts')[0] + '.css';
    const moduleFilePath = sampleFilePath.split('.component.ts')[0] + '.module.ts';
    const selector = fileContent.match(/selector\s*:\s*'(.+?)'\s*/)[1] || '';
    const className = fileContent.match(/export\s*class\s*(.+?)\s.*/)[1] || '';
    const templateUrl = fileContent.match(/templateUrl\s*:\s*'(.+?)'\s*/)[1] || '';
    const stylesUrl = fileContent.match(/styleUrls\s*:\s*\[\s*'(.+?)'\s*\]\s*/) ?
        fileContent.match(/styleUrls\s*:\s*\[\s*'(.+?)'\s*\]\s*/)[1] || '' : null;
    const folderPath = path.dirname(sampleFilePath);

    return {
        strippedPath: strippedPath,
        componentName: componentName,
        sampleName: sampleName,
        templateFilePath: templateFilePath,
        selector: selector,
        className: className,
        templateUrl: templateUrl,
        stylesUrl: stylesUrl,
        fileContent: fileContent,
        samplePath: sampleFilePath,
        stylesFilePath: stylesFilePath,
        folderPath: folderPath,
        moduleFilePath: moduleFilePath
    }
}

function generateSchematics(props: IFileProperties) {
    let fileContent = props.fileContent, schemaJson, configJson, collectionJson, description, compName;
    fileContent = fileContent.replace(props.templateUrl, '<%=dasherize(name)%>.component.html');
    fileContent = fileContent.replace(props.className, '<%= classify(name) %>Component');
    if (props.stylesUrl && props.stylesUrl !== '') {
        fileContent = fileContent.replace(props.stylesUrl, '<%=dasherize(name)%>.component.css');
    }
    fileContent = fileContent.replace(props.selector, '<%=dasherize(selector)%>');

    let componentName = props.strippedPath[0];

    fsExtra.mkdirsSync(`${emitPath}/${props.componentName}-${props.sampleName}`);

    fsExtra.outputFileSync(emitPath +
        `/${props.componentName}-${props.sampleName}` +
        `/samples/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.ts`,
        fileContent);

    if (fsExtra.existsSync(props.templateFilePath)) {
        fileContent = fsExtra.readFileSync(props.templateFilePath).toString();

        fsExtra.outputFileSync(emitPath +
            `/${props.componentName}-${props.sampleName}` +
            `/samples/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.html`,
            fileContent);
    }

    if (fsExtra.existsSync(props.stylesFilePath)) {
        fileContent = fsExtra.readFileSync(props.stylesFilePath).toString();

        fsExtra.outputFileSync(emitPath +
            `/${props.componentName}-${props.sampleName}` +
            `/samples/__path__/__name@dasherize@if-flat__/__name@dasherize__.component.css`,
            fileContent);
    }

    fsExtra.copySync(`${__dirname}/template/`,
        `${packagePath}/schematics/generators/${props.componentName}-${props.sampleName}`);

    if (fsExtra.existsSync(`${props.folderPath}/assets/`)) {
        fsExtra.copySync(`${props.folderPath}/assets/`,
            `${emitPath}/${props.componentName}-${props.sampleName}` +
            `/samples/__path__/__name@dasherize@if-flat__/assets`);
    }

    if (fsExtra.existsSync(`${props.folderPath}/assets/images`)) {
        fsExtra.copySync(`${props.folderPath}/assets/images`,
            `${emitPath}/${props.componentName}-${props.sampleName}` +
            `/images/__path__/__name@dasherize__/`);

        fsExtra.removeSync(`${emitPath}/${props.componentName}-${props.sampleName}` +
            `/samples/__path__/__name@dasherize@if-flat__/assets/images`);

        if (!`${emitPath}/${props.componentName}-${props.sampleName}` +
            `/samples/__path__/__name@dasherize@if-flat__/assets/**/*`)
            fsExtra.removeSync(`${emitPath}/${props.componentName}-${props.sampleName}` +
                `/samples/__path__/__name@dasherize@if-flat__/assets/`);
    }

    schemaJson = fsExtra.readJsonSync(`${packagePath}/schematics/generators/` +
        `${props.componentName}-${props.sampleName}/schema.json`);

    schemaJson.id = `${props.componentName}-${props.sampleName}`;
    schemaJson.title = `${props.componentName}-${props.sampleName}`;

    fsExtra.outputJsonSync(emitPath +
        `/${props.componentName}-${props.sampleName}/schema.json`, schemaJson, { spaces: 2 });

    collectionJson = fsExtra.readJsonSync(`${packagePath}/schematics/collection.json`);

    if (fsExtra.existsSync(`${sourcePath}/${componentName}/config.json`))
        configJson = fsExtra.readJsonSync(`${sourcePath}/${componentName}/config.json`);
    else
        console.log(`ERROR: ${packageName.split('angular-')[0] + packageName.split('angular-')[1]} doesn't ` +
            `have config.json, it can cause exception.`);

    try {
        Object.keys(configJson).forEach(function (component) {
            if (component.toLowerCase() === componentName.toLowerCase()) {
                compName = component;
            }
        })
    } catch (e) {
        console.log(`ERROR: ${packageName.split('angular-')[0] + packageName.split('angular-')[1]} doesn't ` +
            `have valid config.json, it can cause exception.`);
    }

    description = (configJson && configJson[compName]
        && configJson[compName][props.sampleName] &&
        configJson[compName][props.sampleName].description) ?
        configJson[compName][props.sampleName].description :
        `Create an Angular component with EJ2 ${compName} with ${props.sampleName}`;

    collectionJson.schematics = Object.assign(
        collectionJson.schematics, {
            [`${props.componentName}-${props.sampleName}`]: {
                description: description,
                factory: `./generators/${props.componentName}-${props.sampleName}`,
                schema: `./generators/${props.componentName}-${props.sampleName}/schema.json`
            }
        }
    );

    fsExtra.outputJsonSync(`${packagePath}/schematics/collection.json`, collectionJson, { spaces: 2 });

    let diModules = (configJson && configJson[compName]
        && configJson[compName][props.sampleName] &&
        configJson[compName][props.sampleName].diModules &&
        configJson[compName][props.sampleName].diModules.length) ?
        `'${configJson[props.componentName][props.sampleName].diModules.toString()}'` : null;

    let libDetails = require ? require(`${packagePath}/schematics/utils/lib-details`) : null;
    let libModules;

    if (libDetails && libDetails.moduleName) {
        let temp = libDetails.moduleName.split(',');
        for (let i = 0; i < temp.length; i++) {
            if (`${props.componentName}module` === temp[i].trim().toLowerCase()) {
                libModules = temp[i].trim();
                break;
            }
        }
    }

    fsExtra.outputFileSync(emitPath +
        `/${props.componentName}-${props.sampleName}/sample-details.ts`,
        `export const componentName: string = '${props.componentName}';\n` +
        `export const sampleName: string = '${props.sampleName}';\n` +
        `export const diModules: string =  ${diModules ? diModules : null};\n` +
        `export const packageName: string = '${packageName}';\n` +
        `export const libModules: string = '${libModules}';\n`);
}
