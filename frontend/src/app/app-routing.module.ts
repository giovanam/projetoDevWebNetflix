import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importação dos comonentes para contéudo
import { HomeComponent } from "./views/home/home.component";
import { SeriesComponent } from './views/series/series.component';
import { SeriesCreateComponent } from './components/series/series-create/series-create.component';
import { SeriesDeleteComponent } from './components/series/series-delete/series-delete.component';
import { SeriesUpdateComponent } from './components/series/series-update/series-update.component';

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
  {
    path: "series/update/:id",
    component: SeriesUpdateComponent,
  },
  {
    path: "series/delete/:id",
    component: SeriesDeleteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
