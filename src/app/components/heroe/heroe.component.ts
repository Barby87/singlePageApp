import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  // variable local que va a aparecer en el template
  heroe:any = {};

                    // nombreVariable: Paquete que estamos importando
  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService
    ) { 
    
    // params es el nombre de una variable que estoy inventando
    this.activatedRoute.params.subscribe( params => {
      // id es el parámetro ingresado en routes en el archivo app-routing.module.ts (path: 'heroe/:id')
      // console.log( params ['id'] );
      this.heroe = this._heroesService.getHeroe( params['id'] );
      console.log(this.heroe);
    });
  }


}
