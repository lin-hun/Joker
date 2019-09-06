import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'
import {MatIconRegistry} from '@angular/material/icon'
import {Router, NavigationEnd} from '@angular/router'
import {menu} from "../../config/menu";

@Component({
  selector: 'Menu',
  templateUrl: './menu.html',
  styleUrls: ['./menu.scss']
})
export  class Menu implements OnInit {
  data = {
    menus: menu.map(v => {
      return {
        ...v,
        nav: `/${v.path}`,
        active:false
      }
    })
  }
  methods = {
    nav: (menu) => {
      this.router.navigate([menu.nav])
    }
  }

  routerSubscribe() {
    let me = this
    me.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let r = me.data.menus.filter(v => {
          return v.nav === me.router.url
        })
        if (r.length) {
          r[0].active = true
        }
      }
    })
  }

  registerSvg() {
    let me = this
    me.data.menus.forEach((v) => {
      me.iconRegistry.addSvgIcon(
        v.icon,
        me.sanitizer.bypassSecurityTrustResourceUrl(`assets/${v.icon}.svg`))
    })
  }

  constructor(private router: Router, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer,) {
    let me = this
    me.routerSubscribe()
    me.registerSvg()
  }

  ngOnInit() {
    let me = this
  }
}
