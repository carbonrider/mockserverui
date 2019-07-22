import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { RouterStateUrl } from './custom-route-serializer';
import { ActionReducerMap } from '@ngrx/store';


export interface MockyState {
    router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<MockyState> = {
    router: routerReducer
};
