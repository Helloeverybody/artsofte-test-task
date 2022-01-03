import {Component, OnInit} from '@angular/core';
import {CompaniesService} from "../companies.service";
import {HttpService} from "../data_getter.service";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  public companies: any = []

  constructor(companies: CompaniesService, httpService: HttpService) {
    if (CompaniesService.list === undefined){
      httpService.getData(100).subscribe((data) => {
        this.companies = data;
        CompaniesService.list = data
      })
    } else {
      this.companies = CompaniesService.list
    }
  }

  ngOnInit(): void {

  }
}
