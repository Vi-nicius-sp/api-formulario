import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    providerZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideClientHydration(), provideHttpClient(witchFetch())
  ]
};
function providerZoneChangeDetection(arg0: { eventCoalescing: boolean; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}

function witchFetch(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

