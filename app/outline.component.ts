
import {Component} from "@angular/core";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'my-outline',
    template: `{{value}}<button (click)="show()">显示详细的component</button>`
})
export class OutlineComponent{
  private value = "内容大纲组件.......";

  constructor(private router:Router){
  }

  show(): void {
    console.log("有效");
    this.router.navigate(["/content"]);
  }
}

