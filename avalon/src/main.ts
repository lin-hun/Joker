import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Module } from './app/module';
import { AppConfig } from './environments/local';

if (AppConfig.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(Module, {
    preserveWhitespaces: false
  })
  .catch(err => console.error(err));
