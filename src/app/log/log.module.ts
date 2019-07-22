import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogRoutingModule } from './log-routing.module';
import { LogViewerComponent } from './log-viewer/log-viewer.component';

@NgModule({
  declarations: [LogViewerComponent],
  imports: [
    CommonModule,
    LogRoutingModule
  ]
})
export class LogModule { }
