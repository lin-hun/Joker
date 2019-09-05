import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {routes} from "./config/router"

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class Router {
}
