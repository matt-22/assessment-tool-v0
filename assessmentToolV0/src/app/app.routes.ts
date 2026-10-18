import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Component } from '@angular/core';
import { Rider } from './rider/rider';
import { SettingsGrid } from './settings/settings-grid/settings-grid';
import { EquipmentList } from './equipment/equipment-list/equipment-list';

export const routes: Routes = [
    {
        path: 'riders',
        component: Rider
    },
    {
        path: 'settings',
        component: SettingsGrid
    },
    {
        path: 'equipment',
        component: EquipmentList
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
