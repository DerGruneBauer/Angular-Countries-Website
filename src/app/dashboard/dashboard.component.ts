import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchItems: any = [];
  homepageItems: [] = [];

  constructor(private countryService: CountryService ) { }

  ngOnInit(): void {
    this.initialSearch();
  }

  initialSearch() {
    this.countryService.ApiCall().subscribe((data) => {
      this.searchItems = data;
      this.homepageItems = this.searchItems.slice(0, 10);
      console.log(this.homepageItems);
    })
  }

  searchCountries() {
    let query = document.querySelector('input').value;
    this.countryService.getSearchResults(query).subscribe((data) => {
      this.searchItems = data;
      this.homepageItems = this.searchItems.slice(0, 10);
    })
  }

  searchRegion() {
    let query = document.querySelector('select').value;
    this.countryService.getRegionSearch(query).subscribe((data) => {
      this.searchItems = data;
      this.homepageItems = this.searchItems.slice(0, 10);
    })
  }

}
