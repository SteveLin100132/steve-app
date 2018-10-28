/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Saturday, 27th October 2018 8:30:52 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, ViewChild, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  @ViewChild('header') private header: HeaderComponent;

  menuState = true;
  basicForm: FormGroup;

  countryList = ['台北市', '台中市', '高雄市'];

  constructor() {
    this.basicForm = new FormGroup({
      chineseName: new FormControl('林建宇', [Validators.required, Validators.maxLength(10)]),
      englishName: new FormControl('LIN, CHIEN-YU', [Validators.maxLength(20)]),
      gender: new FormControl('男', [Validators.required]),
      military: new FormControl('役畢', [Validators.required]),
      country: new FormControl('高雄市', [Validators.required]),
      address: new FormControl('', [Validators.maxLength(50)]),
      phone: new FormControl('0973-586-705', [Validators.pattern('09[0-9]{2}-[0-9]{3}-[0-9]{3}')])
    });
  }

  ngOnInit(): void {
  }

  getMenuState(event: boolean): void {
    this.menuState = event;
  }
}
