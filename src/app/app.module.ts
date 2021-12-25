import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from "./test_component/test.component";
import { NewComponentComponent } from './new-component/new-component.component';
import { AppRoutingModule } from "./routes.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
