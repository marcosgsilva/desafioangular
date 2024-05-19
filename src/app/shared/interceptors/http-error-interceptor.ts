import { Injectable, inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';



export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const matSackBar = inject(MatSnackBar);
    return next(req).pipe(
        catchError((err: any) => {
            if (err instanceof HttpErrorResponse) {
                // Handle HTTP errors
                if (err.status === 500) {
                    matSackBar.open('Sinto muito, más estamos com o serviço indisponivel no momento, favor tentar mais tarde', 'Ok', {
                        duration: 5000,
                    });
                } else {
                    matSackBar.open('Sinto muito, más estamos com o serviço indisponivel no momento, favor tentar mais tarde', 'Ok', {
                        duration: 5000,
                    });
                }
            } else {
                matSackBar.open('Sinto muito, más estamos com o serviço indisponivel no momento, favor tentar mais tarde', 'Ok', {
                    duration: 5000,
                });
            }

            // Re-throw the error to propagate it further
            return throwError(() => err);
        }));
};