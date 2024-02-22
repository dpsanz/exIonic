import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  n1=''
  n2=''
  n3=''
  res=0

  calc(){
    this.res = parseFloat(this.n1)*0.20+parseFloat(this.n2)*0.10+parseFloat(this.n3)*0.70
  }
}
