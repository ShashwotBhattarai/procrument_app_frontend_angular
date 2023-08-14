import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PutUserService {
  constructor(private http: HttpClient) {}

  async putUser(user_id: any, updatedUser: any): Promise<boolean> {
    let status: boolean = false;

    try {
      const url = `http://localhost:3000/credentials/${user_id}`;
      const response = await this.http.put(url, updatedUser).toPromise();
      console.log(response);
      status = true;
    } catch (error) {
      console.error(error);
      status = false;
    }
    return status;
  }
}
