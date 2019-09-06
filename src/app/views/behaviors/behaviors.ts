import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'behaviors',
  templateUrl: './behaviors.html',
  styleUrls: ['./behaviors.scss']
})
export class Behaviors implements OnInit {
  test = [1,2,3,4]
  constructor() { }

  ngOnInit() {
  }

}
