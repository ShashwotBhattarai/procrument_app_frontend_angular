import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllSitesAndItemsService {
  constructor(private http: HttpClient) {}

  async getAllSites(): Promise<any> {
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
  async getAllItems(): Promise<any> {
    let response: any;
    let itemOptions: any;

    try {
      const url = 'http://localhost:3000/items';
      response = await this.http.get(url).toPromise();
      console.log(response);
      itemOptions = response.map((item: { id: any; item_name: any; item_specification:any; item_make:any; item_unit:any }) => ({
        id: item.id,
        name: item.item_name,
        spec:item.item_specification,
        make:item.item_make,
        unit:item.item_unit,
      }));
      console.log(itemOptions);
    } catch (error) {
      console.error(error);
    }

    return itemOptions;
  }
}
