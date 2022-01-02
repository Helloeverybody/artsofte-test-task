import {Component, OnInit} from '@angular/core';
import {Companies} from "../companies";
import {Company} from "../company_interface";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = []

  constructor() {
    Companies.create_new_list(10)
    this.companies = Companies.list
  }

  ngOnInit(): void {

  }
}
