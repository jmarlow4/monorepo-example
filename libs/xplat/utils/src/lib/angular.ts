// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} in the AppModule only.`
    );
  }
}
