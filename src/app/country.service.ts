import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export const darkTheme = {
  'itemsBG': 'hsl(209, 23%, 22%)',
  'text': 'white',
  'lowerBG': 'hsl(207, 26%, 17%)'
};

export const lightTheme = {
  'itemsBG': 'white',
  'text': 'black',
  'lowerBG': 'hsl(0, 0%, 98%)'
};
@Injectable({
  providedIn: 'root'
})


export class CountryService {

  countryDetails = [];
  borderDetails: string;
  constructor(private httpClient: HttpClient) { }

  ApiUrl: string = `https://restcountries.eu/rest/v2/all`;


  public ApiCall() {
     return this.httpClient.get(this.ApiUrl);
  }

  getSearchResults(country: string) {
    let searchUrl: string = `https://restcountries.eu/rest/v2/name/${country}`;
    return this.httpClient.get(searchUrl);
  }

  getRegionSearch(region: string){
    let searchUrl: string = `https://restcountries.eu/rest/v2/region/${region}`;
    return this.httpClient.get(searchUrl);
  }

  getCountryDetails(country: object){
    this.countryDetails.push(country);
    if(this.countryDetails.length > 1){
      this.countryDetails.splice(0,1);
      return this;
    }else{
      return this;
    }
  }

  returnDetails() {
    return this.countryDetails;
  }

  getBorderDetails(countryCode: string){
    this.borderDetails = countryCode; 
  }

  returnBorderDetails() {
    return this.borderDetails; 
  }

  borderInfo(countryCode: string) {
    let searchUrl: string = `https://restcountries.eu/rest/v2/alpha/${countryCode}`;
    return this.httpClient.get(searchUrl);
  }

  toggleDark() {
    this.setTheme(darkTheme);
  }
  toggleLight() {
    this.setTheme(lightTheme);
  }

  private setTheme(theme: {}) {
    Object.keys(theme).forEach(key =>
      document.documentElement.style.setProperty(`--${key}`, theme[key]))
  }

}
