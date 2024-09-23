import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CandAuth } from './auth/cand.routeguard';

export const routes: Routes = [
    {
        path : '', redirectTo:'login', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path:'welcome/:name', component: WelcomeComponent
    },
    {
        path: 'regPage', component: RegistrationComponent
    },
    {
        path: '**', component: ErrorComponent
    }
];
