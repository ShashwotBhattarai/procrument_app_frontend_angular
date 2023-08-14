import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemsDto } from '../dto\'s/items.dto';

@Injectable({
  providedIn: 'root',
})
export class PostItemService {
  constructor(private http: HttpClient) {}

  async postItem(item:any): Promise<boolean> {
    let status:boolean=false;

    try {
      const url = 'http://localhost:3000/items'; 
      const response = await this.http.post(url, item).toPromise();
      console.log(response);
        status=true;

    } catch (error) {
      console.error(error);
      status=false;
     
    }
    return status;
    
  }
}
