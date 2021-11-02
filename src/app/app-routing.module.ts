import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FranceComponent } from "./france/france.component";
import { GermanyComponent } from "./germany/germany.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", component: LandingPageComponent },
      { path: "france", component: FranceComponent },
      { path: "germany", component: GermanyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
