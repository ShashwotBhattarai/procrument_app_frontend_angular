import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequirementDto } from '../models/requirement.dto';

@Injectable({
  providedIn: 'root',
})
export class PostRequirementService {
  constructor(private http: HttpClient) {}

  async postRequirement(requirement: RequirementDto[]): Promise<boolean> {
    let status:boolean=false;

    try {
      const url = 'http://localhost:3000/requirement'; // Replace with your API endpoint

      const response = await this.http.post(url, requirement).toPromise();
      console.log(response);
        status=true;

    } catch (error) {
      console.error(error);
      status=false;
     
    }
    return status;
    
  }
}
