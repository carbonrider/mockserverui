import { Injectable } from '@angular/core';
import { Configuration } from '../model/config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {

  private _configuration: Configuration = {};

  constructor() {
    const savedConfiguration = window.localStorage.getItem('_mock_config');
    if (savedConfiguration) {
      this._configuration = JSON.parse(savedConfiguration);
    }
  }

  public get configuration() {
    return this._configuration;
  }

  public set configuration(v: Configuration) {
    this._configuration = { ...this._configuration, ...v };
    window.localStorage.setItem('_mock_config', JSON.stringify(this._configuration));
  }

  public isConfigurationAvailable() {
    return this._configuration.mockServerURL;
  }
}
