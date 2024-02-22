import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  num='';
  res=0;

  converter(){
    this.res = parseFloat(this.num)*5;
  }

}

