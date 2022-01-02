import {Company} from "./company_interface";

export class Companies {
  static list: Company[] = []
  static create_new_list(count: number){
    Companies.list = [{
      //уникальный айди
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

      //логотип
      "logo":"https://pigment.github.io/fake-logos/logos/medium/color/13.png",

      //по типам можно сортировать список
      "type":"Public Company",
      "phone_number":"+7 (535) 996-9856",
      "full_address":"3662 Kuhn Overpass, Schaefermouth, RI 18123",

      // пригодится для карт
      "latitude":-4.077683039771557,
      "longitude":120.14505301764905
    },
    {
      "id": 5029,
      "uid": "1d3c711f-2dc1-4e89-8ed6-5a685ee021d6",
      "business_name": "Pfannerstill, Rohan and DuBuque",
      "suffix": "LLC",
      "industry": "Environmental Services",
      "catch_phrase": "Open-source non-volatile customer loyalty",
      "buzzword": "object-oriented",
      "bs_company_statement": "benchmark B2C deliverables",
      "employee_identification_number": "77-1123297",
      "duns_number": "26-697-0285",
      "logo": "https://pigment.github.io/fake-logos/logos/medium/color/11.png",
      "type": "Privately Held",
      "phone_number": "+376 (395) 084-3857",
      "full_address": "Suite 756 4556 Toy Meadow, East Jerriview, VA 45540",
      "latitude": 79.99992800452156,
      "longitude": -158.56156240557164
    },
    {
      "id": 924,
      "uid": "f33b81c9-59b9-411e-ab7a-0d54b00ed6ff",
      "business_name": "Dickens-Little",
      "suffix": "and Sons",
      "industry": "Mining & Metals",
      "catch_phrase": "Robust context-sensitive forecast",
      "buzzword": "website",
      "bs_company_statement": "disintermediate sticky e-tailers",
      "employee_identification_number": "32-1078639",
      "duns_number": "38-846-3541",
      "logo": "https://pigment.github.io/fake-logos/logos/medium/color/6.png",
      "type": "Nonprofit",
      "phone_number": "+248 426.998.0323",
      "full_address": "85743 Enoch Gardens, Port Deanna, IL 52110-4077",
      "latitude": 7.1610480041734235,
      "longitude": 1.0847296531401298
    }]
  }
  constructor(count: number){
    Companies.create_new_list(count)
  }
}

