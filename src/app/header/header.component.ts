/**
 * 專案名稱：steve-app
 * 部門代號：ML8100
 * 檔案說明：
 * @CREATE Saturday, 27th October 2018 10:25:00 pm
 * @author Steve Y Lin
 * @contact Steve_Y_Lin@wistron #1342
 * -----------------------------------------------------------------------------
 * @NOTE
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() menuToggled: EventEmitter<boolean>;

  private menuState = true;

  constructor() {
    this.menuToggled = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.menuState = !this.menuState;
    this.menuToggled.emit(this.menuState);
  }

}
