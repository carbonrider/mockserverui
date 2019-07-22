import { Component, OnInit } from '@angular/core';
import { loadWelcomeScreen } from './actions';
import { Store } from '@ngrx/store';
import { AppModuleState } from './states';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mocky';

  constructor(private layoutStore: Store<AppModuleState>) { }

  ngOnInit() {
    this.layoutStore.dispatch(loadWelcomeScreen());
  }
}
