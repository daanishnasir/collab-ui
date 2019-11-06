import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card.module';
import { AvatarModule, IconModule, ButtonModule } from '@momentum-ui/angular';
import {
  CardDefaultComponent,
  CardContentComponent,
  CardContent2Component,
  CardClickableComponent
} from './index';
@NgModule({
  declarations: [
    CardDefaultComponent,
    CardContentComponent,
    CardContent2Component,
    CardClickableComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AvatarModule,
    IconModule,
    ButtonModule
  ],
  exports: [
    CardDefaultComponent,
    CardContentComponent,
    CardContent2Component,
    CardClickableComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardExamplesModule { }
