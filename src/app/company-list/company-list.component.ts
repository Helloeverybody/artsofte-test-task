import { Component, OnInit } from '@angular/core';
import { CompaniesService } from "../companies.service";
import { HttpService } from "../dataGetter.service";
import {Company} from "../companyInterface";
import {SortingMethodsService} from "../sorting-methods.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [SortingMethodsService]
})
export class CompanyListComponent implements OnInit {
  public companies: any = []

  constructor(companies: CompaniesService, httpService: HttpService, private sortingMethods: SortingMethodsService) {
    if (CompaniesService.list === undefined){
      httpService.getData(10).subscribe((data) => {
        this.companies = data;
        this.startSort('byName')
        CompaniesService.list = this.companies
      })
    } else {
      this.companies = CompaniesService.list
    }
  }

  startSort(sortType: String): void {
      CompaniesService.list = this.companies.sort(this.sortingMethods.selectSortFunction(sortType))
  }

  ngOnInit(): void {

  }
}
