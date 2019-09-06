import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {conf} from "./config/router"

@NgModule({
  imports: [RouterModule.forRoot(conf, {useHash: true})],
  exports: [RouterModule]
})

export class Router {
}
