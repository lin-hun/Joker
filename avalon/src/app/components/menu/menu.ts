import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'Menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export default class Menu{
  menus = [
    {name:'Behaviors'},
    {name:'Layers'},
    {name:'Components'}
  ]
}
