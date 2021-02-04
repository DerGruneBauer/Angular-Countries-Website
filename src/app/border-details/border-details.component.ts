import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-border-details',
  templateUrl: './border-details.component.html',
  styleUrls: ['./border-details.component.css']
})
export class BorderDetailsComponent implements OnInit {

  borderDetails;
  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.searchBorder();
  }

  searchBorder() {
    this.countryService.borderInfo(this.borderInfo).subscribe((data) => {
      this.borderDetails = data;
    })
  }

  detailBorderInfo(countryCode: string) {
    this.countryService.getBorderDetails(countryCode);
  }

  get borderInfo() {
    // return this.countryService.returnBorderDetails();
    return this.countryService.returnBorderDetails();
  }
}
