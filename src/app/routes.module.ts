import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./test_component/test.component";
import {NewComponentComponent} from "./new-component/new-component.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', component: TestComponent },
  { path: 'list', component: NewComponentComponent },
  { path: 'detail/:id', component: TestComponent },
  { path: 'map', component: NewComponentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
