import { ICountryData } from './icovidsummary';

export interface ITotalMinConfirmed extends ICountryData {
    getTotalMinConfirmed(countries: ICountryData[]): ICountryData; 
}

export class TotalMinConfirmed implements ITotalMinConfirmed {
    Country: string;
    CountryCode: string;
    Date: string;
    Slug: string;
    NewConfirmed: number;
    NewDeaths: number;
    NewRecovered: number;
    TotalConfirmed: number;
    TotalDeaths: number;
    TotalRecovered: number;
  
    getTotalMinConfirmed(countries: ICountryData[]): ICountryData {
      let data: ICountryData = this.getFirstCountryData(countries);
      for (let item of countries) {
        if (item.TotalConfirmed < data.TotalConfirmed)
          data = item;
      }
      return data;
    } 
  
    private getFirstCountryData(countries: ICountryData[]): ICountryData {
      let data: ICountryData = {
        Country: countries[0].Country,
        CountryCode: countries[0].CountryCode,
        Date: countries[0].Date,
        Slug: countries[0].Slug,
        NewConfirmed: countries[0].NewConfirmed,
        NewDeaths: countries[0].NewDeaths,
        NewRecovered: countries[0].NewRecovered,
        TotalConfirmed: countries[0].TotalConfirmed,
        TotalDeaths: countries[0].TotalDeaths,
        TotalRecovered: countries[0].TotalRecovered
      };
      return data;
    }
  
    constructor(country: string = '', countryCode: string = '', date: string = '', slug: string = '',
      newConfirmed: number = 0, newDeaths: number = 0, newRecovered: number = 0,
      totalConfirmed: number = 0, totalDeaths: number = 0, totalRecovered: number = 0) { 
      this.Country = country;
      this.CountryCode = countryCode;
      this.Date = date;
      this.Slug = slug;
      this.NewConfirmed = newConfirmed;
      this.NewDeaths = newDeaths;
      this.NewRecovered = newRecovered;
      this.TotalConfirmed = totalConfirmed;
      this.TotalDeaths = totalDeaths;
      this.TotalRecovered = totalRecovered;
    }
}
