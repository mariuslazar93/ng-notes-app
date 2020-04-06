// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  notes_api: 'http://localhost:3000',
  auth0_domain: 'dev-q9rrdt0r.eu.auth0.com',
  auth0_client_id: 'ab7DY0RKJvmZs7Fjl9d5dZsXgCknzqeH',
  auth0_api_audience: 'https://notes-api.heroku.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
