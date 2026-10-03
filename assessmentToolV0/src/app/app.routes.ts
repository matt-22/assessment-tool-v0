import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Component } from '@angular/core';
import { Rider } from './rider/rider';

export const routes: Routes = [
    {
        path: 'rider',
        component: Rider
    }
//     {
//         path: '',
//         redirectTo: 'login',
//         pathMatch: 'full'
//     },
//     {
//         path: 'login',
//         component: Login
//     }
];
