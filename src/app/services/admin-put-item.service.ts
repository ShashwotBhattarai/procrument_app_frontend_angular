import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PutItemService {
  constructor(private http: HttpClient) {}

  async putItem(item_id: any, updatedItem: any): Promise<boolean> {
    let status: boolean = false;

    try {
      const url = `http://localhost:3000/items/${item_id}`;
      const response = await this.http.put(url, updatedItem).toPromise();
      console.log(response);
      status = true;
    } catch (error) {
      console.error(error);
      status = false;
    }
    return status;
  }
}
