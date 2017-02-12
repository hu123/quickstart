import {Component, OnInit} from "@angular/core";
import {StudentService} from "./student.service";
import {Student} from "./student";
@Component({
  moduleId: module.id,
  selector: 'student',
  template: `{{title}}
         <ul >
         <li >id:{{student.id}},name:{{student.name}}</li>
</ul>
`,
  providers: [StudentService],
})
//实现了OnInit接口以便于加载完组件就进行从服务器端抓取数据
export class StudentComponent implements OnInit {
  title = '这是学生组件用于演示ng2从springmvc服务器端拉取数据';
  student: Student = {id: 1, name: 'libai'};
  errorMessage: string;
  //注入StudentService服务
  constructor(private studentService: StudentService) {
  }

  //组件被加载立即去rest服务器上拉取数据
  ngOnInit(): void {
    // console.log("客户端得到了什么????" + this.getStudent());
    this.getStudent();
    console.log("还没赋值上???" + this.student['name']);
    console.log("那错误信息有么??" + this.errorMessage);
  }

/*
  服务器端提供的数据的格式的代码
 @Controller
 public class StudentController {

 private static final Logger loger = LoggerFactory.getLogger(StudentController.class);
 @CrossOrigin
 @ResponseBody
 @RequestMapping("/hero")
 public Object getData() {
 loger.warn("得到调用....");
 return new Student();
 }
 }
实体类的字段是:

 public class Student {
 private int id = 1;
 private String name = "helloworld";

 public int getId() {
 return id;
 }

 public void setId(int id) {
 this.id = id;
 }

 public String getName() {
 return name;
 }

 public void setName(String name) {
 this.name = name;
 }
 }
 */
  getStudent() {
    this.studentService.getStudent()
      .subscribe(
        //subscribe方法在ngOnInit()方法执行完毕之后才得到执行.....
        students =>this.student = students,
        error => this.errorMessage = <any>error
      );
  }


}
