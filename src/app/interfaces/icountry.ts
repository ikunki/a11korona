export interface ICountry {
    Country: string,
    Slug: string,
    ISO2: string
}

export interface ICountriesInfo {
    Countries: ICountry[],
    Count: number
}
