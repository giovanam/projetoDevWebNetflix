import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importação dos comonentes para contéudo
import { HomeComponent } from "./views/home/home.component";
import { SeriesComponent } from './views/series/series.component';
import { SeriesCreateComponent } from './components/series/series-create/series-create.component';

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
