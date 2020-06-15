import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'd'
  constructor(private httpClient:HttpClient) {  
    
  }
  login(data){
    return this.httpClient.post('http://localhost:8008/api/v1/security/login',data)
  }
}
