import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostUserService {
  constructor(private http: HttpClient) {}

  async postCredential(credential:any): Promise<boolean> {
    let status:boolean=false;

    try {
      const url = 'http://localhost:3000/credentials'; 
      const response = await this.http.post(url, credential).toPromise();
      console.log(response);
        status=true;

    } catch (error) {
      console.error(error);
      status=false;
     
    }
    return status;
    
  }
}
