import {Component, NgModule} from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <button (click)="gotoDetail()">View Details</button>`
})
@NgModule()
export class AppComponent {

  gotoDetail():void{
    console.log("这就成功了????")
  }

}
