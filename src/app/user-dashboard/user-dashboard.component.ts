import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {

  constructor(private router: Router){}

  requirementButtonClick(): void {
    console.log('Button clicked!');
    this.router.navigate(['user/requirement']);
  }

}
