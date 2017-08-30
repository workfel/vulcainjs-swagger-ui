import { ExpressAdapter } from 'vulcain-corejs/dist';
export interface ISwaggerOptions {
    title?: string;
    path?: string;
}
export declare class SwaggerUiService {
    register(adapter: ExpressAdapter, options?: ISwaggerOptions): void;
}
