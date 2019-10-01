import { Action } from '@ngrx/store';
import { IError } from 'src/app/core/models/error.model';
import { IAuthData, IAuthParams } from '../redux-models/IAuth.model';

export enum EAuthActions {
    GetAuth = '[Auth] Get Auth',
    GetAuthSuccess = '[Auth] Get Auth Success',
    GetAuthError = '[Auth] Get Auth Error'
}

export class GetAuth implements Action {
    public readonly type = EAuthActions.GetAuth;
    constructor(public payload: IAuthParams) { }
}

export class GetAuthSuccess implements Action {
    public readonly type = EAuthActions.GetAuthSuccess;
    constructor(public payload: IAuthData) { }
}

export class GetAuthError implements Action {
    public readonly type = EAuthActions.GetAuthError;
    constructor(public payload: IError) { }
}

export type AuthActions = GetAuth | GetAuthSuccess | GetAuthError;
