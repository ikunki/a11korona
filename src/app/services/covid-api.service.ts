import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICovidSummary } from '../interfaces/icovidsummary';

export interface ICovidApiSrv {
  refreshData(summary: ICovidSummary): void
}

@Injectable({
  providedIn: 'root'
})
export class CovidApiService  implements ICovidApiSrv {
  constructor() {}

  private covidSummary = new BehaviorSubject<ICovidSummary>({
    Message: '',
    Global: {
      NewConfirmed: 0,
      NewDeaths: 0,
      NewRecovered: 0,
      TotalConfirmed: 0,
      TotalDeaths: 0,
      TotalRecovered: 0
      },
    Countries: []
  })
  varSummary = this.covidSummary.asObservable()

  refreshData(summary: ICovidSummary): void {
    this.covidSummary.next(summary)
    const item = new Object() as ICovidSummary
    item.Message = this.covidSummary.value.Message
    item.Global.NewConfirmed = this.covidSummary.value.Global.NewConfirmed
    item.Global.NewDeaths = this.covidSummary.value.Global.NewDeaths
    item.Global.NewRecovered = this.covidSummary.value.Global.NewRecovered
    item.Global.TotalConfirmed = this.covidSummary.value.Global.TotalConfirmed
    item.Global.TotalDeaths = this.covidSummary.value.Global.TotalDeaths
    item.Global.TotalRecovered = this.covidSummary.value.Global.TotalRecovered
    item.Countries = this.covidSummary.value.Countries
    //this.templates.value.files.push(item)
  }

}
/*
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

import { ITemplate, ITemplates } from '../interfaces'

export interface ITemplateService {
  vivifyTemplate(file: ITemplate)
  vivifyTemplates(file: ITemplates)
  vivifyText(src: string)
}

@Injectable({
  providedIn: 'root',
})
export class TemplateService implements ITemplateService {
  constructor() {}

  // File = Template
  private template = new BehaviorSubject<ITemplate>({
    id: 0,
    name: '',
    description: '',
    function: '',
  })
  varFile = this.template.asObservable()

  // Files = Templates
  private templates = new BehaviorSubject<ITemplates>({
    id: 0,
    files: [],
  })
  varList = this.templates.asObservable()

  private srcText = new BehaviorSubject('tesztem')
  aText = this.srcText.asObservable()

  vivifyTemplate(file: ITemplate) {
    this.template.next(file)
    const item = new Object() as ITemplate
    item.id = this.template.value.id
    item.name = this.template.value.name
    item.description = this.template.value.description
    item.function = this.template.value.function
    this.templates.value.files.push(item)
  }

  vivifyTemplates(files: ITemplates) {
    this.templates.next(files)
  }

  vivifyText(src: string) {
    this.srcText.next(src)
  }
}
*/