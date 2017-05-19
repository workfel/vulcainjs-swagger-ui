import { Injectable, LifeTime, ExpressAdapter } from 'vulcain-corejs/dist';
import * as express from 'express';
import { SwaggerTemplate } from './swagger.template';

export interface ISwaggerOptions {
    title?: string;
    path?: string;

}

@Injectable(LifeTime.Singleton, 'SwaggerUiService')
export class SwaggerUiService {

    register(adapter: ExpressAdapter, options: ISwaggerOptions = {}) {

        // tslint:disable-next-line:curly
        if (!options.path)
            options.path = '_swagger-ui';

        // tslint:disable-next-line:curly
        if (!options.title)
            options.title = 'Vulcainjs - Swagger UI';


        adapter.useMiddleware('get', `/${options.path}`, (req: express.Request, res: express.Response) => {

            let url = req.protocol + '://' + req.headers['host'] + '/api/_servicedescription?format=swagger';

            res.send(SwaggerTemplate.getHtmlRendered(options.title, url));
        });
    }

}