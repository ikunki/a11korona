
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
    Countries: []
}
