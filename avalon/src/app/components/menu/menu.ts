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
    {name:'Behaviors'},
    {name:'Layers'},
    {name:'Components'}
  ]
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }
}
