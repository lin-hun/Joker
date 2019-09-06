import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {DesignComponents} from './components/components'
import {Layers} from './layers/layers'
import {Behaviors} from './behaviors/behaviors'
import {MatButtonModule} from '@angular/material/button'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {CommonModule} from '@angular/common'

@NgModule({
  declarations: [
    DesignComponents,
    Layers,
    Behaviors
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [
    DesignComponents,
    Layers,
    Behaviors
  ],
  providers: []
})
export class ViewsModule {
}
