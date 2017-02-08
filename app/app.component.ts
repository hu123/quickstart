import {Component, NgModule, OnInit} from '@angular/core';
import {MyService} from './myservice';

@Component({
  selector: 'my-app',
  template: ` <p *ngIf="value.length == 11">value的值是helloworld就显示aaaaa</p>`
})
@NgModule()
export class AppComponent implements OnInit {
  constructor(private myService: MyService) {
  }
  value: string = "helloworld2";


  gotoDetail(): void {
    console.log("这就成功了????")
  }

  ngOnInit(): void {
    this.myService.method();
  }
}
