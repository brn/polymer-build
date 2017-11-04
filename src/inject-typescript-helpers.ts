import {helpers, HelpersInjector} from './inject-helpers';

/**
 * When compiling to ES5 we need to inject Babel's helpers into a global so
 * that they don't need to be included with each compiled file.
 */
export class TypeScriptHelpersInjector extends HelpersInjector {
  constructor(entrypoint: string) {
    super(entrypoint, helpers.TS);
  }
}
