import 'reflect-metadata'
import '../polyfills'
import { NgModule } from '@angular/core'
import {  HttpClientModule } from '@angular/common/http'
import { Router } from './router'

import { Electron } from './providers/electron'
import {ComponentsModule} from './components/components.module'
import {App} from './app'
import {ViewsModule} from './views/views.module'

@NgModule({
  declarations: [
    App
  ],
  imports: [
    HttpClientModule,
    ComponentsModule,
    ViewsModule,
    Router
  ],
  providers: [Electron],
  bootstrap: [App]
})

export class AppModule { }
