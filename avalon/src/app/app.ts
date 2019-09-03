import { Component } from '@angular/core';
import { Electron } from './providers/electron';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/local';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  constructor(public electronService: Electron,
    private translate: TranslateService) {
    translate.setDefaultLang('en')
    if (electronService.isElectron()) {
    } else {
    }
  }
}
