import {RouterModule, Routes} from "@angular/router";
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'detail/:id', component: CompanyDetailComponent, data: {va: 'Profile info'}},
  { path: 'list', component: CompanyListComponent },
  { path: 'map', component: CompanyYandexMapComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
