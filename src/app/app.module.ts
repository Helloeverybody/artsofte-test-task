import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestComponent } from "./test_component/test.component";
import { AppRoutingModule } from "./routes.module";
import { LayoutComponentComponent } from './layout-component/layout-component.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyYandexMapComponent } from './company-yandex-map/company-yandex-map.component';
import { FormsModule } from "@angular/forms";
import { CompanyItemComponent } from './company-item/company-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LayoutComponentComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyYandexMapComponent,
    CompanyItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
