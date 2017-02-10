import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Student} from "./student";

@Injectable()
export class StudentService {
  private url = 'http://localhost:8080/hero';

  constructor(private http: Http) {
  }

  getStudent(): Promise<Student[]> {
    return this.http.get(this.url).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    //将拿到的hero数据进行打印....
    console.log("即将开始对Student数据的打印-----");
    console.log(body['name']);
    console.log("结束对Student数据的打印-----");

    return body;
  }
  private handleError (error: Response | any) {
    console.log("有错误???");
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
