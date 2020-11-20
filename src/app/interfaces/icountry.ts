export interface ICountry {
    Country: string,
    ISO2: string,
    Slug: string,
}

export interface ICountriesInfo {
    Countries: ICountry[],
    Count: number
}


export class CountriesInfo implements ICountriesInfo {
    Countries: ICountry[];
    Count: number;
  
    getCountInfo(data: ICountriesInfo): number {
      return data.Count;
    } 

    constructor(countries: ICountry[] = [], count: number = 0) { 
      this.Countries = countries;
      this.Count = count;
    }
}
