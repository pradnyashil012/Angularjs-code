import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  url = "http://localhost:1234";

  constructor(private http:HttpClient) { }

  //calling the server to generate otp
  generateOTP(credentials:any){
    //token generation
    return this.http.post(`${this.url}/verification`, credentials);
}


}
