import {Component, EventEmitter, OnInit} from '@angular/core';
import { CompaniesService } from "../companies.service";
import { HttpService } from "../dataGetter.service";
import {Company} from "../companyInterface";
import {SortingMethodsService} from "../sorting-methods.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [SortingMethodsService]
})
export class CompanyListComponent implements OnInit {
  public companies: any = []

  isAvailable = false
  constructor(companies: CompaniesService, httpService: HttpService, private sortingMethods: SortingMethodsService) {
    CompaniesService.list = CompaniesService.originalList
    if (CompaniesService.list === undefined){
      httpService.getData(100).subscribe((data) => {
        this.companies = data
        this.startSort('byName')
        CompaniesService.list = this.companies
        CompaniesService.originalList = this.companies
        CompaniesService.createPropertiesList()
        this.isAvailable = true
      })
    } else {
      this.isAvailable = true
      this.companies = CompaniesService.list
    }
  }

  startSort(sortType: String): void {
    CompaniesService.list = this.companies.sort(this.sortingMethods.selectSortFunction(sortType))
  }

  startFilter(sortInstructions: any): void {
    this.companies = CompaniesService.originalList.filter((company: Company) => {
      let name = false
      let type = false
      let industry = false

      let nameFilter = sortInstructions.nameFilter.value
      let typeFilter = sortInstructions.typeFilter.value
      let industryFilter = sortInstructions.industryFilter.value

      if (nameFilter === null){
        name = true
      } else if(company.business_name.indexOf(nameFilter) !== -1){
        name = true
      }

      if (typeFilter === null || typeFilter === 'Без фильтра'){
        type = true
      } else if(company.type === typeFilter){
        type = true
      }

      if (industryFilter === null || industryFilter === 'Без фильтра'){
        industry = true
      } else if(company.industry === industryFilter){
        industry = true
      }
      return name && type && industry
    })
  }

  ngOnInit(): void { }
}
