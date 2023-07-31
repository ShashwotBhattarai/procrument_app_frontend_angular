import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllSitesService {
  constructor(private http: HttpClient) {}

  getAllSites():any {
    const responseArray = this.callBackend();
    return responseArray;
  }

  async callBackend() {
    let response: any;
    let siteOptions: any;

    try {
      const url = 'http://localhost:3000/site';
      response = await this.http.get(url).toPromise();
      siteOptions = response.map((site: { id: any; site_name: any }) => ({
        id: site.id,
        name: site.site_name,
      }));
      
    } catch (error) {
      console.error(error);
    }

    return siteOptions;
  }
}
