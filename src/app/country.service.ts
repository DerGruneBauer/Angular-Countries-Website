import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

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

}
