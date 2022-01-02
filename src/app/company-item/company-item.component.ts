import { Input, Component, OnInit } from '@angular/core';
import {Company, Sample_Company} from "../company_interface";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company = new Sample_Company()

  constructor() { }

  ngOnInit(): void {
  }

}
