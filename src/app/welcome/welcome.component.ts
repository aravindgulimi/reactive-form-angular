import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{

  name: string = '';

  constructor(private router: ActivatedRoute){

  }

  ngOnInit(){
    this.name = this.router.snapshot.params['name'];
  }
}
