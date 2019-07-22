import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Configuration } from 'src/app/model/config';

export const selectConfigurationFeature = createFeatureSelector<Configuration>('config');

export const selectConfiguration = createSelector(
    selectConfigurationFeature,
    (state: Configuration) => state
);
