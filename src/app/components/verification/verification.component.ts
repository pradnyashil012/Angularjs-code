import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  credentials={
    otp:''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
