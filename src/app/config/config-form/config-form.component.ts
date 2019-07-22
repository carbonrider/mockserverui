import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Configuration } from 'src/app/model/config';
import { Store, select } from '@ngrx/store';
import { saveConfiguration, loadSavedConfiguration } from '../actions';

import * as configurationSelect from '../selectors';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit, OnDestroy {

  configurationForm: FormGroup;

  private savedConfiguration$: Subscription;

  constructor(private fb: FormBuilder, private store: Store<Configuration>) { }

  ngOnInit() {
    this.initializeForm();
    this.store.dispatch(loadSavedConfiguration());
    this.mapSavedConfigurationToForm();
  }

  mapSavedConfigurationToForm() {
    this.savedConfiguration$ = this.store.pipe(select(configurationSelect.selectConfiguration))
      .subscribe((s) => {
        this.configurationForm.patchValue(s);
      });
  }

  private initializeForm() {
    this.configurationForm = this.fb.group({
      apiURL: [null, [Validators.required]]
    });
  }

  submitForm() {
    const configuration = this.configurationForm.value as Configuration;
    this.store.dispatch(saveConfiguration({ config: configuration }));
  }

  ngOnDestroy() {
    this.savedConfiguration$.unsubscribe();
  }

}
