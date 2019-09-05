import { Component,OnInit } from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material/icon'
import {Router} from '@angular/router'
@Component({
  selector: 'Menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export default class Menu implements OnInit{
  data = {
    menus :[
      {name:'Behaviors',icon:'new',nav:'/behaviors'},
      {name:'Layers',icon:'layer',nav:'/layers'},
      {name:'Components',icon:'component',nav:'components'}
    ]
  }
  methods = {
    nav:(menu)=>{
      this.router.navigate([menu.nav]);
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
    console.log(me.router.url,'router')
  }
}
