import { IEnvironment } from './environment.interface';

/**
 * cSpell:disable
 * Reduce the most commonly used environment values here
 */
export const environmentBase: IEnvironment = {
  production: false,
  api: '/api',
  firebaseOptions: {
    apiKey: 'AIzaSyAVWzgZqYXbzlXuzCwsIsOJYzVNm1RJS7Y',
    authDomain: 'monorepo-ex.firebaseapp.com',
    projectId: 'monorepo-ex',
    storageBucket: 'monorepo-ex.appspot.com',
    messagingSenderId: '103289758081',
    appId: '1:103289758081:web:e0639d707dce128caf8880',
    measurementId: 'G-8CC3LYWTQ5',
  },
};
