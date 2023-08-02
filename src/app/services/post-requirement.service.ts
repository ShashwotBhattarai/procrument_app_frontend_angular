import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequirementDto } from '../dto\'s/requirement.dto';

@Injectable({
  providedIn: 'root',
})
export class PostRequirementService {
  constructor(private http: HttpClient) {}

  async postRequirement(requirement: RequirementDto[]): Promise<any> {
    let response: any;

    try {
      const url = 'http://localhost:3000/requirement'; // Replace with your API endpoint

      this.http.post(url, requirement).subscribe((response) => {
        // Handle the response from the server here
        console.log('Response:', response);
      });
    } catch (error) {
      console.error(error);
    }

    return response;
  }
}
