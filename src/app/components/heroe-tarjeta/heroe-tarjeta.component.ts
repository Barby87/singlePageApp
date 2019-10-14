import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Output siempre va junto con EventEmitter
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {}; // La propiedad heroe puede venir desde afuera (desde otro componente). En este caso el componente heroes.component.html (padre) está usando la etiqueta del componente hijo <app-heroe-tarjeta></app-heroe-tarjeta> , por lo que desde este componente se está mandando una propiedad llamada heroe.
  
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>; // Nombre del evento que quiero que el componente padre esté escuchando. En este caso va a emitir el index, por lo tanto es tipo number. En el constructor se debe inicialiar el EventEmitter.

  constructor( private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    // console.log( this.index );
    this.router.navigate( ['/heroe', this.index ]);
    // this.heroeSeleccionado.emit( this.index ); // Aquí estoy haciendo que el componente hijo emita el índice (index) que estoy recibiendo.
  
  }

}
