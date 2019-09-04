import {NgModule} from '@angular/core'
import Menu from './menu/menu'
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material'
import {MatIconModule} from '@angular/material/icon'
import {BrowserModule} from '@angular/platform-browser'

@NgModule({
  declarations: [
    Menu
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    BrowserModule
  ],
  exports: [
    Menu
  ],
  providers: []
})
export class ComponentsModule {
}
