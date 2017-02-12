import {Component, OnInit} from "@angular/core";
import {StudentService} from "./student.service";
import {Student} from "./student";
@Component({
  moduleId: module.id,
  selector: 'student',
  template: `{{title}}
         <ul >
         <!--<li >id:{{student.id}},name:{{student.name}}</li>-->
         <li *ngFor="let aaa of students" >{{aaa.id}},{{aaa.name}}</li>
</ul>
`,
  providers: [StudentService],
})
//实现了OnInit接口以便于加载完组件就进行从服务器端抓取数据
export class StudentComponent implements OnInit {
  title = '这是学生组件用于演示ng2从springmvc服务器端拉取数据';
  students: Student[];
  errorMessage: string;
  //注入StudentService服务
  constructor(private studentService: StudentService) {
  }

  //组件被加载立即去rest服务器上拉取数据
  ngOnInit(): void {
    // console.log("客户端得到了什么????" + this.getStudent());
    this.getStudent();

  }

/*
  服务器端提供的数据的格式的代码
 package org.hl.controller;

 import org.hl.entity.Student;
 import org.slf4j.Logger;
 import org.slf4j.LoggerFactory;
 import org.springframework.stereotype.Controller;
 import org.springframework.web.bind.annotation.CrossOrigin;
 import org.springframework.web.bind.annotation.RequestMapping;
 import org.springframework.web.bind.annotation.ResponseBody;

 import java.util.ArrayList;
 import java.util.List;

 @Controller
 public class StudentController {

 private static final Logger loger = LoggerFactory.getLogger(StudentController.class);
 @CrossOrigin
 @ResponseBody
 @RequestMapping("/hero")
 public Object getData() {
 loger.warn("得到调用....");
 List<Student> list = new ArrayList<>();
 list.add(new Student());
 Student student = new Student();
 student.setName("C++同学");
 list.add(student);
 return list;
 }
 }


 package org.hl.entity;

 public class Student {
 private int id = 1;
 private String name = "Java同学";

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
        students =>this.students = students,
        error => this.errorMessage = <any>error
      );
  }


}
