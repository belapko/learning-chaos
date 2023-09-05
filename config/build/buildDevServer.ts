import { BuildOptions } from "./types/config";
import {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port, // server port
        open: true, // open new window in browser when server starts
    };
};