// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class CandRegModule { }
export class CandReg {
  constructor(
    public firstName: string,
    public lastName: string,
    public gmail: string,
    public userName: string,
    public dateOfBirth: string,
    public gender: string,
    public street: string,
    public country: string,
    public city: string,
    public region: string,
    public postalCode: number,
    public skills: []
  ) {}
}
