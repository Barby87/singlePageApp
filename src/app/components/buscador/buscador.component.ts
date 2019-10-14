import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService } from 'src/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  
  @Input() heroe: any = {};
  @Input() index: number;
  heroes:any[] = [];
  termino:string;


  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _heroesService: HeroesService) {

  }
  
  ngOnInit(){
  
  // params es el nombre de una variable que estoy inventando
  this.activatedRoute.params.subscribe( params => {
    this.termino = params['termino'];
    // 'termino' es el parámetro ingresado en routes en el archivo app-routing.module.ts
    // console.log( params ['termino'] );
    this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    console.log(this.heroes);
  });

  }

  verHeroe(){
     this.router.navigate( ['/heroe', this.index]);   
   }
 

}
