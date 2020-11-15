export interface IGlobal {
    NewConfirmed: number,
    NewDeaths: number,
    NewRecovered: number,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
}

export interface ICountryData {
    Country: string,
    CountryCode: string,
    Date: string,
    Slug: string,
    NewConfirmed: number,
    NewDeaths: number
    NewRecovered: number,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number
}

export interface ICovidSummary {
    Message: string,
    Global: IGlobal,
    Countries: ICountryData[]
}

export interface ITotalMinConfirmed extends ICountryData {
    getTotalMinConfirmed(countries: ICountryData[]): ICountryData; 
}

export interface ITotalMinDeaths extends ICountryData {
    getTotalMinDeaths(countries: ICountryData[]): ICountryData; 
}

export interface ITotalMaxConfirmed extends ICountryData {
    getTotalMaxConfirmed(countries: ICountryData[]): ICountryData; 
}

export interface ITotalMaxDeaths extends ICountryData {
    getTotalMaxDeaths(countries: ICountryData[]): ICountryData; 
}
