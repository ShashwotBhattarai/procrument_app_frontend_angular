import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PutSiteService } from 'src/app/services/admin-put-site.service';
import { GetAllSitesAndItemsService } from 'src/app/services/get-all-sites.service';

@Component({
  selector: 'app-admin-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.css']
})
export class EditSiteComponent {
  constructor(
    private getAllSitesAndItemsService: GetAllSitesAndItemsService,
    private putSiteService: PutSiteService,
    private router: Router
  ) {}
  siteOptions: any;

  async callFetchService() {
    let fetchedSiteOptions =
      await this.getAllSitesAndItemsService.getAllSites();
    this.siteOptions = fetchedSiteOptions;
    console.log(this.siteOptions);
  }

  editSiteForm = new FormGroup({
    site_id: new FormControl('', [Validators.required]),
    site_name: new FormControl('', [Validators.required]),
    site_location: new FormControl('', [Validators.required]),
    site_manager_name: new FormControl('', [Validators.required]),
  });

  

  ngOnInit(): void {
    this.callFetchService();
    this.editSiteForm.get('site_id')?.valueChanges.subscribe(selectedSiteId => {
      const selectedSite = this.siteOptions.find((site: { id: string }) => site.id === selectedSiteId);
      if (selectedSite) {
        this.editSiteForm.patchValue({
          site_name: selectedSite.name,
          site_location: selectedSite.location,
          site_manager_name: selectedSite.managerName,
        });
      }
    });
  }

  async onSubmit() {
    if (this.editSiteForm.valid) {
      const formData = this.editSiteForm.value;
      console.log(formData);
      const site_id = formData.site_id;
      const updatedItem = {
        site_name: formData.site_name,
        site_location: formData.site_location,
        site_manager_name: formData.site_manager_name,
      };
      const response = await this.putSiteService.putSite(site_id, updatedItem);
      if (response == true) {
        this.router.navigate(['admin/dashboard']);
      }
    } else {
      // Form is not valid, show error messages or take appropriate action
      console.log('Form is invalid');
    }
  }

}
