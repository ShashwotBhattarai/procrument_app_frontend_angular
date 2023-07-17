import { Injectable, booleanAttribute } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthenticationService {
  constructor(private http: HttpClient) {}

  async login(username: any, password: any): Promise<object> {
    
    let response_info = {
      status: false,
      access_token: '',
      id: '',
      fullName: '',
      role: ''
    };
    const credentials = `${username}:${password}`;
    const encodedCredentials = `Basic ${btoa(credentials)}`;
    const httpOptions = {
      headers: new HttpHeaders().set('Authorization', encodedCredentials),
    };

    const url = 'http://localhost:3000/auth/login';

    try {
      const response: any = await this.http.get(url, httpOptions).toPromise();
      console.log(response);
      console.log(response.access_token);
      if (response.access_token) {
        console.log('iam inside here');
        response_info.status = true;
        response_info.access_token = response.access_token;
        response_info.fullName = response.fullName;
        response_info.id = response.id;
        response_info.role = response.role;
        
      }
      
    } catch (error) {
      console.error(error);
    }
    return response_info;

    
  }
}
