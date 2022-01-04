import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./routes.module";
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompanyItemComponent } from './company-item/company-item.component';
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./dataGetter.service";
import { CompaniesService } from "./companies.service";
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponentComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
    CompanySortComponent,
    CompanyFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, CompaniesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
