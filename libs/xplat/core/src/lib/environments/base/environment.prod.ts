import { IEnvironment } from '@monorepo/xplat/core';
import { deepMerge } from '@monorepo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
