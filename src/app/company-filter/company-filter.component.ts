import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CompaniesService} from "../companies.service";

interface SortType{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.css']
})
export class CompanyFilterComponent implements OnInit {
  @Output() filtrateList = new EventEmitter<any>()
  filterForm: FormGroup

  typesList = CompaniesService.typesList
  industriesList = CompaniesService.industriesList

  constructor() {
    this.filterForm = new FormGroup({
      nameFilter: new FormControl(),
      typeFilter: new FormControl(),
      industryFilter: new FormControl()
    })
  }

  filter(){
    this.filtrateList.emit(this.filterForm.controls)
  }

  ngOnInit(): void {
  }

}
