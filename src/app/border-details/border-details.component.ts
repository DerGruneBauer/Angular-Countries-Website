import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-border-details',
  templateUrl: './border-details.component.html',
  styleUrls: ['./border-details.component.css']
})
export class BorderDetailsComponent implements OnInit {

  borderDetails: any;
  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
    this.searchBorder(this.borderInfo);
  }

  detailBorderInfo(countryCode: string) {
    this.countryService.getBorderDetails(countryCode);
  }

  get borderInfo() {
    return this.countryService.returnBorderDetails();
  }

  searchBorder(query: string) {
    this.countryService.borderInfo(query).subscribe((data) => {
      this.borderDetails = data;
    })
  }
}
