// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
<<<<<<< HEAD
  url: 'localhost:9200/api/'
=======
  URL: 'http://localhost:9300',
  API_VERSION: '/api/v1'
>>>>>>> 9f60bbd9a114cae02ce3492ad8654e8e19ec2ec8
};

export const API_ROUTE = `${environment.URL}${environment.API_VERSION}`;
export const ROUTE = `${environment.URL}`;

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
