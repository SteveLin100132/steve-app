/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Sunday, 28th October 2018 7:03:57 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Input, AfterViewInit, forwardRef,
         ElementRef } from '@angular/core';
import { FormControl, ControlValueAccessor,
         NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { trigger, state, style, animate,
         transition } from '@angular/animations';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
  providers: [
    // 控制項數值存取
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    },
    // 控制項數值驗證
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ],
  animations: [
    trigger('showEffect', [
      state('hide', style({
        top: '0px',
        opacity: 0,
        display: 'none'
      })),
      state('show', style({
        top: '45px',
        opacity: 1,
        display: 'block'
      })),
      transition('show => hide', animate('300ms')),
      transition('hide => show', animate('300ms'))
    ])
  ]
})
export class DropdownComponent implements OnInit, AfterViewInit, ControlValueAccessor {

  @Input() options: [string];

  toggle = false;
  select: string;
  selectElement: ElementRef;
  control: FormControl;

  private onChanges: (value) => {};

  constructor(private element: ElementRef) {}

  ngOnInit() {
    if (this.options !== undefined) {
      this.select = this.options[0];
    }
  }

  ngAfterViewInit() {
    this.selectElement = this.element.nativeElement.querySelector('select');
  }

  toggleSelect() {
    this.toggle = !this.toggle;
  }

  selectOption(value): void {
    this.select = value;

    if (this.control !== undefined) {
      this.onChanges(value);
    }
  }

  writeValue(value): void {
    if (this.options !== undefined) {
      this.options.forEach(element => {
        if (element === value) {
          this.select = element;
        }
      });
    }
  }

  registerOnChange(fn: (value) => {}) {
    this.onChanges = fn;
  }

  registerOnTouched(): void {}

  validate(control: FormControl) {
    this.control = control;
  }

}
