import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BasicRoutingModule} from './basic-routing.module';
import { BasicComponent } from './basic.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputWithAccessorComponent } from './input-with-accessor/input-with-accessor.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    BasicComponent,
    InputTextComponent,
    InputWithAccessorComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule
  ]
})
export class BasicModule { }
