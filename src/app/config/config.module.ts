import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule, MatCardModule, MatSnackBarModule } from '@angular/material';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigFormComponent } from '../config/config-form/config-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as configReducer from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffect } from './effects';

@NgModule({
  declarations: [ConfigFormComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    StoreModule.forFeature('config', configReducer.reducer),
    EffectsModule.forFeature([ConfigEffect])
  ]
})
export class ConfigModule { }
