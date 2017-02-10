// Promise Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Hero }           from './hero';

@Injectable()
export class HeroService {
  // URL to web api
  private heroesUrl = 'http://localhost:8080/student';

  constructor (private http: Http) {}

  getHeroes (): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  addHero (name: string): Promise<Hero> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, { name }, options)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    //将拿到的hero数据进行打印....
    console.log(body['name']);
    return body;
  }

  private handleError (error: Response | any) {
    console.log("有错么???/");
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


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
