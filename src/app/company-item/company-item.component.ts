import { Input, Component, OnInit } from '@angular/core';
import {Company} from "../company";

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  @Input() company: Company = new Company()

  constructor() { }

  ngOnInit(): void {
  }

}
