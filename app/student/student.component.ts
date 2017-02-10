import {Component, OnInit} from "@angular/core";
import {StudentService} from "./student.service";
import {Student} from "./student";
@Component({
  moduleId: module.id,
  selector: 'student',
  template: `{{title}}`,
  providers: [StudentService],
})
//实现了OnInit接口以便于加载完组件就进行从服务器端抓取数据
export class StudentComponent implements OnInit {
  title = '这是学生组件用于演示ng2从springmvc服务器端拉取数据';
  students: Student[];

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudent().then(students => console.log()
      , error => console.log(error));
  }


}
