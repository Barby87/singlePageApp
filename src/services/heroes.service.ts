import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private heroes:Heroe[] =[
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC"
    },
    {
      nombre: "Daredevil",
      bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
      img: "assets/img/daredevil.png",
      aparicion: "1964-01-01",
      casa: "Marvel"
    },
    {
      nombre: "Hulk",
      bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
      img: "assets/img/hulk.png",
      aparicion: "1962-05-01",
      casa:"Marvel"
    },
    {
      nombre: "Linterna Verde",
      bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
      img: "assets/img/linterna-verde.png",
      aparicion: "1940-06-01",
      casa: "DC"
    },
    {
      nombre: "Spider-Man",
      bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
      img: "assets/img/spiderman.png",
      aparicion: "1962-08-01",
      casa: "Marvel"
    },
    {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1974-11-01",
      casa: "Marvel"
    }
  ];


  constructor() { 
    console.log("Servicio listo para usar!!");
  }

  getHeroes():Heroe[]{
    // this hace referencia a la clase heroes
    return this.heroes;
  }
  
  // Función para obtener un héroe en particular con el id especificado en heroe.component.ts (ACtivatedRoute)
  getHeroe( index: string){
    // Retorna una posición del arreglo
    return this.heroes[index];
  }

  buscarHeroes( termino: string ):Heroe[]{ // Esta función va a regresar un arreglo de Heroe ya filtrado
    
    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase(); // El término que ingresa el usuario en el input lo pasamos a minúscula
    
    //Barrido del arreglo de heroes, para ver si tiene el nombre que coincida con el término con el ciclo for of, por cada iteración se extrae un héroe.
    
    // for( let heroe of this.heroes ){

    for( let i = 0; i < this.heroes.length; i++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();
      
      if( nombre.indexOf( termino ) >= 0 ){ // Buscar un string (término) dentro del nombre
        heroe.idx = i; // Con esto la búsqueda va a tener la posición original del arreglo heroes, ya no va a tener la posición 0.
        heroesArr.push( heroe ) // Si el indice es mayor a 0, agrega ese héroe que encontró, al nuevo arreglo de héroes
      }
    }

    return heroesArr; // Nuevo arreglo de héroes filtrado

  }
}

// interface creada para que no se altere el arreglo de héroes
export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number; // propiedad opcional (sólo se utiliza para la búsqueda)
};

// return this.heroes.filter(item=> item.id = index)