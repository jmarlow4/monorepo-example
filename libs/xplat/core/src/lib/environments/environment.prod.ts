import { IEnvironment } from '..';
import { deepMerge } from '@monorepo/xplat/utils';
import { environmentBase } from './environment.base';

export const environment = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
