import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Student} from "./student";
import {Observable} from "rxjs/Observable";

@Injectable()
export class StudentService {
  //从指定的地址拉取数据
  private url = 'http://localhost:8080/hero';

  constructor(private http: Http) {
  }

  getStudent():Observable<Student> {
    return this.http.get(this.url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    //将拿到的hero数据进行打印....
    console.log("即将开始对Student数据的打印-----");
    console.log(body || {});
    console.log("结束对Student数据的打印-----");

    return body || {};
  }
}
