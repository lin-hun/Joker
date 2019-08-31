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

    translate.setDefaultLang('en');
    // console.log('AppConfig', AppConfig);
    // console.log(electronService,'electronService')
    if (electronService.isElectron()) {
      // console.log('Mode electron');
      // console.log('Electron ipcRenderer', electronService.ipcRenderer);
      // console.log('NodeJS childProcess', electronService.childProcess);
    } else {
      // console.log('Mode web');
    }
  }
}
