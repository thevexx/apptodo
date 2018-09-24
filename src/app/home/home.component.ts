import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  a: number;
  b = 5;
  message = '';
  isDisabled = false;
  constructor() { }

  ngOnInit() {
    this.message = 'Five Points';
    this.a = 2;
    let c = this.a + this.b;
    console.log('result = ' + c);
  }

  btnClicked(msg) {
    this.message = msg;
  }

}
