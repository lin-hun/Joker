import { Component,OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
@Component({
  selector: 'Menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export default class Menu{
  menus = [
    {name:'Behaviors',icon:'new'},
    {name:'Layers',icon:'layer'},
    {name:'Components',icon:'component'}
  ]
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    let me = this
    me.menus.forEach((v)=>{
      iconRegistry.addSvgIcon(
        v.icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/${v.icon}.svg`))
    })
  }
}
