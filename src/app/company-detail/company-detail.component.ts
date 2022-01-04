import {Component, OnInit} from '@angular/core';
import {Company} from "../companyInterface";
import {ActivatedRoute} from "@angular/router";
import {CompaniesService} from "../companies.service";
import {SampleCompany} from "../companyInterface";

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  company: Company

  id: number
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params['id']
    let company = CompaniesService.list.find((comp: Company) => comp.id == this.id)
    this.company = company === undefined ? new SampleCompany() : company
  }

  ngOnInit(): void {
  }

}
