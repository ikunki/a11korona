
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

export interface IGlobal {
    NewConfirmed: number,
    NewDeaths: number,
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
}

export interface ITotalMinDeaths extends ICountryData {
}

export interface ITotalMaxConfirmed extends ICountryData {
}

export interface ITotalMaxDeaths extends ICountryData {
}
