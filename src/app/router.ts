import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import Components from './views/components/components';
import Layers from './views/layers/layers';
import Behaviors from './views/behaviors/behaviors';

const routes: Routes = [
  {
    path: '',
    component: Behaviors
  },
  {
    path: 'components',
    component: Components
  },
  {
    path: 'layers',
    component: Layers
  },
  {
    path: 'behaviors',
    component: Behaviors
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class Router {
}
