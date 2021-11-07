import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { SeriesComponent } from './views/series/series.component';
import { SeriesCreateComponent } from './views/series/series-create/series-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },  
  {
    path: "series",
    component: SeriesComponent,
  },
  {
    path: "series/create",
    component: SeriesCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
