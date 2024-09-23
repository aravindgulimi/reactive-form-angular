import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from './Validation/noSpaceValidation.validator';
import { CandService } from '../services/cand.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CandReg } from './Model/cand-reg/cand-reg';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [HttpClientModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  registrationForm!: FormGroup

  http: HttpClient = inject(HttpClient);
  candService: CandService = inject(CandService);

  // constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(30), CustomValidators.noSpaceAllowed]),
      lastName: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      gmail: new FormControl(null, [Validators.required, Validators.email]),
      userName: new FormControl(null, [Validators.required]),
      dateOfBirth: new FormControl(null, [Validators.required]),
      gender: new FormControl('male', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(null, [Validators.required]),
        country: new FormControl('India', [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        region: new FormControl(null, [Validators.required]),
        postalCode: new FormControl(null, [Validators.required]),
      }),
      skills: new FormArray([
        new FormControl('Angular')
      ])
    })
  }

  generateUsername(){
      let username = '';
      const fname = this.registrationForm.get('firstName')?.value;
      const lname = this.registrationForm.get('lastName')?.value;
      const dob = this.registrationForm.get('dateOfBirth')?.value;

      if(fname.length >= 3){
        username += fname.slice(0,3);
      }else{
        username += fname || '';
      }

      if(lname.length >= 3){
        username += lname.slice(0,3);
      }else{
        username += lname || '';
      }

      let dateTime = new Date(dob);
      username += dateTime.getFullYear();

      username = username.toLowerCase();
      this.registrationForm.get('userName')?.setValue(username)
  }

  onSubmitReg(){
    window.alert("Form submitted: User name: " + this.registrationForm.get('userName')?.value);

    console.log(this.registrationForm);
    
    // this.http.post('https://angularhttpclient-13abb-default-rtdb.firebaseio.com/candReg.json', {}).subscribe((data)=>{
    //   console.log(data);
    // })
    
  }
}
