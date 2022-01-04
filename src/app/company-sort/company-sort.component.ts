import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from "@angular/forms";
import {SortingMethodsService} from "../sorting-methods.service";

interface SortType{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.css']
})
export class CompanySortComponent implements OnInit {
  @Output() sortList = new EventEmitter<String>()
  selectedSortType: string
  sortTypes: SortType[] = [
    {value: 'byName', viewValue: 'по имени'},
    {value: 'byType', viewValue: 'по типу'},
    {value: 'byIndustry', viewValue: 'по виду деятельности'},
  ]

  constructor() {
    this.selectedSortType = SortingMethodsService.sortMethod
  }

  sort(){
    SortingMethodsService.sortMethod = this.selectedSortType
    this.sortList.emit(SortingMethodsService.sortMethod)
  }

  ngOnInit(): void {
  }
}
