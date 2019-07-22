import { createReducer, on, Action } from '@ngrx/store';

import * as ConfigurationActions from '../actions';
import { Configuration } from 'src/app/model/config';

import * as configurationState from '../states';

export const initialState: Configuration = configurationState.initialState;

const configurationReducer = createReducer(
    initialState,
    on(ConfigurationActions.saveConfigurationSuccess, (state, { config }) => {
        return ({ ...state, ...config });
    }),
    on(ConfigurationActions.loadConfigurationSuccess, (state, { config }) => {
        return ({ ...state, ...config });
    })
);

export function reducer(state: Configuration, action: Action) {
    return configurationReducer(state, action);
}
