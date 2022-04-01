import { IEnvironment } from '@monorepo/xplat/core';
import { deepMerge } from '@monorepo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentDev = deepMerge(environmentBase, <IEnvironment>{
  // customizations here...
});
