/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Sunday, 28th October 2018 4:46:58 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SteveUiComponent } from './steve-ui.component';
import { InputTextComponent } from './../input-text/input-text.component';
import { InputRadioComponent } from './../input-radio/input-radio.component';
import { DropdownComponent } from './../dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    SteveUiComponent,
    InputTextComponent,
    InputRadioComponent,
    DropdownComponent
  ],
  exports: [
    InputTextComponent,
    InputRadioComponent,
    DropdownComponent
  ]
})
export class SteveUiModule { }
