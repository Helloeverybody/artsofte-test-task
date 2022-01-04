import {Injectable} from "@angular/core";
import {Company} from "./companyInterface";

@Injectable({providedIn: 'root'})
export class SortingMethodsService {
  static sortMethod: string = 'byName'

  compareByName(company1: Company, company2: Company){
    if (company1.business_name > company2.business_name){
      return 1
    } else if (company1.business_name < company2.business_name) {
      return -1
    } else {
      return 0
    }
  }

  compareByType(company1: Company, company2: Company){
    if (company1.type > company2.type){
      return 1
    } else if (company1.type < company2.type){
      return -1
    } else{
      return 0
    }
  }

  compareByIndustry(company1: Company, company2: Company){
    if (company1.industry > company2.industry){
      return 1
    } else if (company1.industry < company2.industry){
      return -1
    } else {
      return 0
    }
  }

  selectSortFunction(parameter: String){
    if (parameter === 'byName'){
      return this.compareByName
    } else if (parameter === 'byType'){
      return this.compareByType
    } else if (parameter === 'byIndustry'){
      return this.compareByIndustry
    } else {
      return null
    }
  }
}
