import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies
  get_list = function(): object[]{
    let a: [] = []
    let b = async function(){
      await fetch('https://random-data-api.com/api/company/random_company?size=10').then((response) => {
        return response.json()
      }).then((data)=>{
        console.log(data)
        a = data
      })
    }
    b()
    return a;
  }

  constructor() {
    // this.companies = this.get_list()
    this.get_list()
    this.companies = [
      {
        //уникальный айдишник
        "id":2729,
        "uid":"9fc3b9c4-18b8-4b5f-bd18-8cbf48411de2",
        "business_name":"Goodwin LLC",
        "suffix":"Group",
        "industry":"Farming",
        "catch_phrase":"Grass-roots exuding encryption",
        "buzzword":"transitional",
        "bs_company_statement":"transition transparent e-commerce",
        "employee_identification_number":"43-5025844",
        "duns_number":"57-603-7175",

        //логотипчик
        "logo":"https://pigment.github.io/fake-logos/logos/medium/color/13.png",

        //по типам можно сортировать список
        "type":"Public Company",
        "phone_number":"+7 (535) 996-9856",
        "full_address":"3662 Kuhn Overpass, Schaefermouth, RI 18123",

        // пригодится для карт
        "latitude":-4.077683039771557,
        "longitude":120.14505301764905
      }
    ]
  }

  ngOnInit(): void {
  }
}
