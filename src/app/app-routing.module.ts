import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/componentes/home/home.component';
import { NosotrosComponent } from './components/componentes/nosotros/nosotros.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
