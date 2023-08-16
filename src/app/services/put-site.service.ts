import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PutSiteService {
  constructor(private http: HttpClient) {}

  async putSite(site_id: any, updatedSite: any): Promise<boolean> {
    let status: boolean = false;

    try {
      const url = `http://localhost:3000/site/${site_id}`;
      const response = await this.http.put(url, updatedSite).toPromise();
      console.log(response);
      status = true;
    } catch (error) {
      console.error(error);
      status = false;
    }
    return status;
  }
}
