import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Components } from './views/components/components';
import { Components } from './views/layers/layers';
const routes: Routes = [
    {
        path: '',
        component: Components
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class Router { }
