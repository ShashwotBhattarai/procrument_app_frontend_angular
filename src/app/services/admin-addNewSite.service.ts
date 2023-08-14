import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class PostSiteService {
  constructor(private http: HttpClient) {}

  async postSite(site:any): Promise<boolean> {
    let status:boolean=false;

    try {
      const url = 'http://localhost:3000/site'; 
      const response = await this.http.post(url,site).toPromise();
      console.log(response);
        status=true;

    } catch (error) {
      console.error(error);
      status=false;
     
    }
    return status;
    
  }
}
