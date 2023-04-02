import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTING } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/componentes/home/home.component';
import { HeroesComponent } from './components/componentes/heroes/heroes.component';
import { NosotrosComponent } from './components/componentes/nosotros/nosotros.component';
import { HistoriaComponent } from './components/componentes/historia/historia.component';
import { FooterComponent } from './components/componentes/footer/footer.component';
import { NavbarComponent } from './components/componentes/navbar/navbar.component';

//Servicio Data
import { HeroeService } from './heroe-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    NosotrosComponent,
    HistoriaComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [HeroeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
