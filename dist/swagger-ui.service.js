"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dist_1 = require("vulcain-corejs/dist");
const swagger_template_1 = require("./swagger.template");
let SwaggerUiService = class SwaggerUiService {
    register(adapter, options = {}) {
        // tslint:disable-next-line:curly
        if (!options.path)
            options.path = '_swagger-ui';
        // tslint:disable-next-line:curly
        if (!options.title)
            options.title = 'Vulcainjs - Swagger UI';
        adapter.useMiddleware('get', `/${options.path}`, (req, res) => {
            let url = req.protocol + '://' + req.headers['host'] + '/api/_servicedescription?format=swagger';
            res.send(swagger_template_1.SwaggerTemplate.getHtmlRendered(options.title, url));
        });
    }
};
SwaggerUiService = __decorate([
    dist_1.Injectable(dist_1.LifeTime.Singleton, 'SwaggerUiService')
], SwaggerUiService);
exports.SwaggerUiService = SwaggerUiService;

//# sourceMappingURL=swagger-ui.service.js.map
