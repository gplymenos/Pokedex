import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovesComponent } from './moves/moves.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {name : 'Home'}},
  { path: 'pokemon', component: PokemonComponent, data: {name : 'Pokemon List'}},
  { path: 'moves', component: MovesComponent, data: {name : 'Move List'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
