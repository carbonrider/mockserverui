import { createAction, props } from '@ngrx/store';
import { Configuration } from 'src/app/model/config';

export const loadSavedConfiguration = createAction('[Configuration] Load');

export const loadConfigurationSuccess = createAction('[Configuration] Load success',
    props<{ config: Configuration }>()
);

export const saveConfiguration = createAction('[Configuration] Save ',
    props<{ config: Configuration }>()
);


export const saveConfigurationSuccess = createAction('[Configuration] Save success',
    props<{ config: Configuration }>()
);

export const saveConfigurationError = createAction('[Configuration] Save error');
