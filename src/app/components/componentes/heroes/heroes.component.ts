import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/heroe';
import { HeroeService } from 'src/app/heroe-service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroeService]

})

export class HeroesComponent implements OnInit {
  heroes!: Heroe[];

  constructor(private heroeService: HeroeService) {}

  ngOnInit() {
    this.heroes = this.heroeService.getHeroes();
  }
}



