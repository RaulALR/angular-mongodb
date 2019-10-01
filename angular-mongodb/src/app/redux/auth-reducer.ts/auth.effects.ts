import { Injectable } from '@angular/core';
import { ofType, Effect } from '@ngrx/effects';
import { EAuthActions, GetAuth, GetAuthError, GetAuthSuccess } from './auth.actions';
import { Actions } from '@ngrx/effects';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { HttpService } from '../../core/services/http.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';
import { Utils } from 'src/app/core/services/utils';

@Injectable({
    providedIn: 'root'
})
export class AuthEffects {

    @Effect()
    protected getAuth$ = this.actions$.pipe(
        ofType<GetAuth>(EAuthActions.GetAuth),
        switchMap(
            (action) => {
                const params = {
                    username: action.payload && action.payload.username ? action.payload.username : null,
                    password: action.payload && action.payload.password ? action.payload.password : null
                };

                return this.httpService.callBackEnd(environment.endpoints.auth, 'POST', params).pipe(
                    map((res) => {
                        debugger
                        localStorage.setItem('token', JSON.stringify(res));
                        const decodeUser = this.utils.decodeJWT(res);
                        const user = {
                            token: res,
                            username: decodeUser.username,
                            email: decodeUser.email
                        };
                        return new GetAuthSuccess(user);
                    },
                        (error) => new GetAuthError(error))
                );
            }
        ),
        map(res => res)
    );

    constructor(
        private httpService: HttpService,
        private actions$: Actions,
        private utils: Utils
    ) { }
}
