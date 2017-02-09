import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
  moduleId: module.id,
  selector: "content",
  template: `{{value}}<br/><button (click)="outline()">回去</button>`
})
export class ContentCompoennt {
  private value = "具体的内容组件....";
  constructor(private router: Router) {
  }
  outline(): void {
    console.log("回去咯");
    this.router.navigate(["/outline"]);
  }
}
