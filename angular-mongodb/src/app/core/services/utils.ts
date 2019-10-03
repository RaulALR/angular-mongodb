import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { GetAuthError } from 'src/app/redux/auth-reducer.ts/auth.actions';

@Injectable()
export class Utils {

    constructor(
        private domSanitizer: DomSanitizer,
        private matIconRegistry: MatIconRegistry,
    ) { }

    public getIcons(iconsArray: Array<string>) {
        iconsArray.forEach((item) => {
            const name = item.split('.');
            this.matIconRegistry.addSvgIcon(
                name[0],
                this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${item}.svg`)
            );
        });
    }

    public decodeJWT(token) {
        return jwt_decode(token);
    }

    public getMatErrorMessage(control: FormControl, literals: any) {
        let msg = null;
        literals.forEach((item) => {
            if (control.hasError(item.error)) {
                msg = item.msg;
            }
        });
        return msg;
    }

    public showErrorModal(err) {
        console.log(err);
        swal.fire(
            'Error!',
            `${err.error.message.charAt(0).toUpperCase()}${err.error.message.slice(1)}`,
            'error'
        );
        return new GetAuthError(err);
    }
}
