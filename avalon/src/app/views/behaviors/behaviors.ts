import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'behaviors',
  templateUrl: './behaviors.html',
  styleUrls: ['./behaviors.scss']
})
export class Components implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
