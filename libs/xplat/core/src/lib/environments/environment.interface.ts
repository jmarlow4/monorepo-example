/**
 * Workspace shared environment properties
 */
export interface IEnvironment {
  production: boolean;
  api: string;
  firebaseOptions: {
    apiKey?: string;
    authDomain?: string;
    databaseURL?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
    measurementId?: string;
  };
}
