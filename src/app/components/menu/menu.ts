import { Component,OnInit } from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material/icon'
import {Router} from '@angular/router'
import {menu} from "../../config/menu";

@Component({
  selector: 'Menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export default class Menu implements OnInit{
  data = {
    menus :menu.map(v=>{
      return {
        ...v,
        nav:`/${v.path}`,
      }
    })
  }
  methods = {
    nav:(menu)=>{
      this.router.navigate([menu.nav])
    }
  }
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private router:Router) {
    let me = this
    me.data.menus.forEach((v)=>{
      iconRegistry.addSvgIcon(
        v.icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/${v.icon}.svg`))
    })
  }
  ngOnInit() {
    let me = this
    console.log(me.router)
    console.log(me.router.url,'router')
  }
}
