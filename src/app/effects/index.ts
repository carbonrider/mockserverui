import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedStateService } from 'src/app/service/shared-state.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { tap, mapTo } from 'rxjs/operators';
import { loadWelcomeScreen, loadLogScreen, loadConfigurationScreen } from '../actions';

@Injectable()
export class AppModuleEffects {
    constructor(private actions$: Actions, private router: Router, private sharedState: SharedStateService) { }

    loadWelcomeScreenEffect$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadWelcomeScreen),
            mapTo(
                this.sharedState.isConfigurationAvailable()
                    ? loadLogScreen() : loadConfigurationScreen()
            )
        )
    );

    loadConfigurationScreen$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadConfigurationScreen),
            tap(() => {
                this.router.navigate(['/configuration']);
            })
        ), { dispatch: false }
    );

    loadLogScreen$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadLogScreen),
            tap(() => {
                this.router.navigate(['/log']);
            })
        ), { dispatch: false }
    );
}
