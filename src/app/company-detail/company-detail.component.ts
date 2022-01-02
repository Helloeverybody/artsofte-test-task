import {Component, OnInit} from '@angular/core';
import {Company} from "../company_interface";
import {ActivatedRoute} from "@angular/router";
import {Companies} from "../companies";
import {Sample_Company} from "../company_interface";
import {Subscription} from "rxjs";

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
    let company = Companies.list.find((comp) => comp.id == this.id)
    this.company = company === undefined ? new Sample_Company() : company
  }

  ngOnInit(): void {
  }

}
