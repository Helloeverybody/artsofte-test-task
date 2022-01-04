import { Input, Component, OnInit } from '@angular/core';
import {Company, SampleCompany} from "../companyInterface";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company = new SampleCompany()

  constructor() { }

  ngOnInit(): void {
  }

}
