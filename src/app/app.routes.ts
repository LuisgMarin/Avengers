import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./components/componentes/home/home.component"
import { HeroesComponent } from "./components/componentes/heroes/heroes.component"
import { NosotrosComponent } from "./components/componentes/nosotros/nosotros.component"
import { HistoriaComponent } from "./components/componentes/historia/historia.component"
const APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'nosotros',component:NosotrosComponent},
    {path:'historia',component:HistoriaComponent},
    {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);