import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockRoutingModule } from './mock-routing.module';
import { MockContainerComponent } from './mock-container/mock-container.component';
import { MockListComponent } from './mock-list/mock-list.component';
import { MockDetailComponent } from './mock-detail/mock-detail.component';
import { MockEntryComponent } from './mock-entry/mock-entry.component';

@NgModule({
  declarations: [MockContainerComponent, MockListComponent, MockDetailComponent, MockEntryComponent],
  imports: [
    CommonModule,
    MockRoutingModule
  ]
})
export class MockModule { }
