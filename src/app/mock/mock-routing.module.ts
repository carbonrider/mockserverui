import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockContainerComponent } from './mock-container/mock-container.component';

const routes: Routes = [
  {
    path: '',
    component: MockContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockRoutingModule { }
