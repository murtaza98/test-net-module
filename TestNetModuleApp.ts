import {
    IAppAccessors,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';

// NEW IMPORTS FROM BUILT-IN MODULES
import {Socket} from 'net';
import {Script} from 'vm';
import {Duplex} from 'stream';

export class TestNetModuleApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }
}
