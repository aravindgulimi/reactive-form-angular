import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CandReg } from '../registration/Model/cand-reg/cand-reg';

@Injectable({
  providedIn: 'root'
})
export class CandService {

  http: HttpClient = inject(HttpClient);

  postCall(data: any){
    this.http.post('https://angularhttpclient-13abb-default-rtdb.firebaseio.com/candReg.json', {data}).subscribe((resp)=>{
      console.log(resp);
      
    })
  }

  constructor() { }
}
