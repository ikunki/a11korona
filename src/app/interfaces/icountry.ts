export interface ICountry {
    Country: string,
    ISO2: string,
    Slug: string,
}

export interface ICountriesInfo {
    Countries: ICountry[],
    Count: number
}
