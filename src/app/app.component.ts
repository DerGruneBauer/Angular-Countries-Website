import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CountryService } from './country.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-Countries-Project';

  darkTheme = new FormControl(false);

  constructor(private countryService: CountryService) {

    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.countryService.toggleDark();
      } else {
        this.countryService.toggleLight();
      }
    })
  }
  
}
