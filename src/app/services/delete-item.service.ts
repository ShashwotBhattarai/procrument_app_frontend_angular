import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DeleteItemService {
  constructor(private http: HttpClient) {}

  async deleteItem(item_id: any): Promise<boolean> {
    let status: boolean = false;

    try {
      const url = `http://localhost:3000/items/${item_id}`;
      const response = await this.http.delete(url).toPromise();
      console.log("response"+response);
      status = true;
    } catch (error) {
      console.error(error);
      status = false;
    }
    return status;
  }
}
