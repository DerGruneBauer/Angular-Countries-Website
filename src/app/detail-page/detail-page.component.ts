import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  get details() {
    return this.countryService.returnDetails();
  }

  borderInfo(countryCode: string) {
    this.countryService.getBorderDetails(countryCode);
  }

}
