import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackbarService {
    constructor(private snackBar: MatSnackBar) { }


    openSnackBar(message: string, action?: string, config?) {
        const defaultConfig = {
            duration: 2500,
            panelClass: 'snackbarText'
        };

        this.snackBar.open(
            message,
            undefined,
            (config ? config : defaultConfig)
        );
    }
}
