/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Sunday, 28th October 2018 12:29:42 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 * 客製化表單元件，需實作 ControlValueAccessor
 */

import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { FormControl, ControlValueAccessor,
         NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.less'],
  providers: [
    // 控制項數值存取
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true
    },
    // 控制項數值驗證
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputRadioComponent),
      multi: true
    }
  ]
})
export class InputRadioComponent implements OnInit, ControlValueAccessor {

  @Input() checked: boolean;
  @Input() name: string;
  @Input() value: string;
  @Input() control: FormControl;

  private onChanges: (value: string) => {};

  constructor() {}

  ngOnInit() {
  }

  /**
   * @method selectRadio 當Radio Button的值改變
   * @return {void}
   */
  selectRadio(): void {
    if (this.control !== undefined) {
      this.onChanges(this.value);
    }
  }

  /**
   * @method writeValue 實作ControlValueAccessor
   * @param {string} value
   */
  writeValue(value: string) {
    if (this.value === value) {
      this.checked = true;
    }
  }

  /**
   * @method registerOnChange 實作ControlValueAccessor
   * @param {function} fn
   */
  registerOnChange(fn: (value: string) => {}) {
    this.onChanges = fn;
  }

  /**
   * @method registerOnTouched 實作ControlValueAccessor
   * @return {void}
   */
  registerOnTouched(): void {}

  /**
   * @method validate 實作ControlValueAccessor
   * @param {FormControl} control
   * @return {void}
   */
  validate(control: FormControl): void {
    this.control = control;
  }

}
