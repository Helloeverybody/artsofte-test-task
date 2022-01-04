import {Injectable} from "@angular/core";
import {Company} from "./companyInterface";

@Injectable({providedIn: 'root'})
export class CompaniesService {
  public static list: Company[]
  public static originalList: Company[]
  public static typesList: string[]
  public static industriesList: string[]

  public static createPropertiesList(){
    CompaniesService.typesList = []
    CompaniesService.industriesList = []
    CompaniesService.typesList.push('Без фильтра')
    CompaniesService.industriesList.push('Без фильтра')
    for (let company of CompaniesService.list){
      if (CompaniesService.typesList.indexOf(company.type) === -1){
        CompaniesService.typesList.push(company.type)
      }

      if (CompaniesService.industriesList.indexOf(company.industry) === -1){
        CompaniesService.industriesList.push(company.industry)
      }
    }
  }

  constructor(){
  }
}

