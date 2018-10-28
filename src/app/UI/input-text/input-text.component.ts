/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Sunday, 28th October 2018 4:04:05 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor,
         NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less'],
  providers: [
    // 控制項數值存取
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    },
    // 控制項數值驗證
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {

  @Input() value: string;
  @Input() placeholder: string;

  control: FormControl;

  private onChanges: (value: string) => {};

  constructor() { }

  ngOnInit() {
  }

  inputText(): void {
    this.onChanges(this.value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => {}) {
    this.onChanges = fn;
  }

  registerOnTouched(): void {}

  validate(control: FormControl): void {
    this.control = control;
  }

}
