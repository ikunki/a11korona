import { ICountryData } from './icovidsummary';

export interface ITotalMaxConfirmed extends ICountryData {
    getTotalMaxConfirmed(countries: ICountryData[]): ICountryData; 
}

export class TotalMaxConfirmed implements ITotalMaxConfirmed {
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
  
    getTotalMaxConfirmed(countries: ICountryData[]): ICountryData {
      console.log('list ', countries);
      let data: ICountryData = this.getFirstCountryData(countries);
      for (let item of countries) {
        if (item.TotalConfirmed > data.TotalConfirmed)
          data = item;
      }
      return data;
    } 
  
    private getFirstCountryData(countries: ICountryData[]): ICountryData {
      console.log('1st ', countries[0]);
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
  
    constructor(Country: string = '', CountryCode: string = '', Date: string = '', Slug: string = '',
      NewConfirmed: number = 0, NewDeaths: number = 0, NewRecovered: number = 0,
      TotalConfirmed: number = 0, TotalDeaths: number = 0, TotalRecovered: number = 0) { 
      this.Country = Country;
      this.CountryCode = CountryCode;
      this.Date = Date;
      this.Slug = Slug;
      this.NewConfirmed = NewConfirmed;
      this.NewDeaths = NewDeaths;
      this.NewRecovered = NewRecovered;
      this.TotalConfirmed = TotalConfirmed;
      this.TotalDeaths = TotalDeaths;
      this.TotalRecovered = TotalRecovered;
    }
}
