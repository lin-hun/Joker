import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import Components from './components/components'
import Layers from './layers/layers'
import Behaviors from './behaviors/behaviors'
import {MatButtonModule} from '@angular/material/button'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations:[
    Components,
    Layers,
    Behaviors
  ],
  imports:[
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [
    Components,
    Layers,
    Behaviors
  ],
  providers: []
})
export class ViewsModule {
}
