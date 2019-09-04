import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'behaviors',
  templateUrl: './behaviors.html',
  styleUrls: ['./behaviors.scss']
})
export default class Behaviors implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
