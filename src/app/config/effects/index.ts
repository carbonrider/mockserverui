import { Injectable } from '@angular/core';
import { SharedStateService } from 'src/app/service/shared-state.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { saveConfiguration, saveConfigurationSuccess, loadConfigurationSuccess, loadSavedConfiguration } from '../actions';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ConfigEffect {

    constructor(private actions$: Actions, private sharedService: SharedStateService,
        private snackbar: MatSnackBar) { }

    loadSavedConfiguration$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadSavedConfiguration),
            switchMap(() => {
                return of(loadConfigurationSuccess({ config: this.sharedService.configuration }));
            })
        )
    );

    saveConfiguration$ = createEffect(
        () => this.actions$.pipe(
            ofType(saveConfiguration),
            map(action => action.config),
            switchMap((config) => {
                this.sharedService.configuration = config;
                this.snackbar.open('Configuration saved.', null, { duration: 3000 });
                return of(saveConfigurationSuccess({ config: this.sharedService.configuration }));
            })
        )
    );
}
