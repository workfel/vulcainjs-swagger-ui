# vulcainjs-swagger-ui

This plugin add swagger-ui to your vulcainjs project.

<p/>
<img src="https://nodei.co/npm/vulcainjs-swagger-ui.png?downloads=true&stars=true" alt=""/>

<p/>

[![dependencies](https://img.shields.io/david/workfel/vulcainjs-swagger-ui.svg)](https://www.npmjs.com/package/vulcainjs-swagger-ui)
[![license](https://img.shields.io/npm/l/vulcainjs-swagger-ui.svg)](https://www.npmjs.com/package/vulcainjs-swagger-ui)

## Installation

```shell
$ npm install vulcainjs-swagger-ui
```

## Usage

On the `startup.ts` file you need to add 2 lines.
First on `initializeServices` method :

```js
initializeServices(container: IContainer) {
    //...
    container.injectSingleton(SwaggerUiService);
    //...
    }
```
And on `onServerStarted` :

```js
 onServerStarted(server, adapter) {
        //...
        let swaggerUI = this.container.get<SwaggerUiService>('SwaggerUiService');
        swaggerUI.register(adapter);
        //...
    }
```

## Visualization

The default endpoint is `_swagger-ui`.
</p>

Go to [http://localhost:8080/_swagger-ui](http://localhost:8080/_swagger-ui) for seen your api.
