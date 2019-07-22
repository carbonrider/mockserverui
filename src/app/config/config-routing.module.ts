import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigFormComponent } from './config-form/config-form.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigFormComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
