// Promise Version
import {Component, OnInit} from '@angular/core';
import {Hero}              from './hero';
import {HeroService}       from './hero.service.promise';

@Component({
  selector: 'hero-list-promise',
  moduleId: module.id,
  templateUrl: 'hero-list.component.promise.html',
  providers: [HeroService],
  styles: ['.error {color:red;}']
})
export class HeroListPromiseComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Promise';

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  show(): void {
    console.log("手动查看数据begin");
    for (var i = 0; i < this.heroes.length;) {
      console.log(this.heroes[i]);
    }
    console.log("手动查看数据end");
  }

  getHeroes() {
    this.heroService.getHeroes()
      .then(
        heroes => {
          console.log("即将抛出异常....");
          // this.heroes[0] = heroes[0];

          console.log(this.heroes);
        },
        error => this.errorMessage = <any>error);

  }

  addHero(name: string) {
    if (!name) {
      return;
    }
    this.heroService.addHero(name)
      .then(
        hero => this.heroes.push(hero),
        error => this.errorMessage = <any>error);
  }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
