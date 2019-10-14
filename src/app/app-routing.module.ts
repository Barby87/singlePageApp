import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  // Arreglo de rutas. Especificar todas las posibles rutas para nuestra app
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  // /:id es el parámetro (héroe) que se va a mostrar
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'buscar/:termino', component: BuscadorComponent},
  // Ruta por defecto, en caso de que la app no logre encontrar una ruta específica.
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutComponent, HeroesComponent]
