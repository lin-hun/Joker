import 'reflect-metadata'
import '../polyfills'
import { NgModule } from '@angular/core'
import {  HttpClientModule,HttpClient } from '@angular/common/http'
import { Router } from './router'
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { Electron } from './providers/electron'
import {ComponentsModule} from './components/components.module'
import {App} from './app'
import {ViewsModule} from './views/views.module'

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
@NgModule({
  declarations: [
    App
  ],
  imports: [
    HttpClientModule,
    ComponentsModule,
    ViewsModule,
    Router,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [Electron],
  bootstrap: [App]
})

export class AppModule { }
