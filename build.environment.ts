import { getAppVersion } from './app-version';
import { IEnvironmentBase } from './environment.base';

export const environment: IEnvironmentBase = {
    apiEndpoint: '/TrapezeClientNgDemo/',
    production: true,
    pwa: true,
    version: getAppVersion(),
};