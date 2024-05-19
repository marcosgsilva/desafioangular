import { ApplicationConfig, ValueProvider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { httpErrorInterceptor } from './shared/interceptors/http-error-interceptor';


const SNACK_BAR_CONFIG: ValueProvider =
{
  provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
  useValue: {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  } as MatSnackBarConfig,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors(
      [httpErrorInterceptor]
  )),
    provideRouter(routes),
    provideAnimationsAsync(),

    SNACK_BAR_CONFIG
  ]
};
