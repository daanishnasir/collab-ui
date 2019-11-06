import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AlertModule, ButtonModule } from '@momentum-ui/angular';
import {
  ExampleAlertDefaultComponent,
  ExampleAlertSuccessComponent,
  ExampleAlertErrorComponent,
  ExampleAlertWarningComponent,
} from './index';


@NgModule({
  imports: [AlertModule, ButtonModule],
  declarations: [
    ExampleAlertDefaultComponent,
    ExampleAlertErrorComponent,
    ExampleAlertSuccessComponent,
    ExampleAlertWarningComponent,
  ],
  exports: [
    ExampleAlertDefaultComponent,
    ExampleAlertErrorComponent,
    ExampleAlertSuccessComponent,
    ExampleAlertWarningComponent,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertExamplesModule {}
