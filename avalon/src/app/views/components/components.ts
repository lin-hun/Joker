import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'components',
  templateUrl: './components.html',
  styleUrls: ['./components.scss']
})
export class Components implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
