import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Router } from './router';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Electron } from './providers/electron';

import { Webview } from './directives/webview';

import { App } from './app';
import Components from './views/components/components';
import Layers from './views/layers/layers';
import Behaviors from './views/behaviors/behaviors';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    App,
    Components,
    Layers,
    Behaviors,
    Webview
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
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
export class Module { }
