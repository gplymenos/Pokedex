import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetails: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.currentPokemon.subscribe(pokemon => {
      this.pokemonDetails = pokemon;
      console.log(this.pokemonDetails);
    });
  }

  getType() {
    let types = [];
    this.pokemonDetails.types.map(type => {
      types.push(type.type.name);
    })

    return types.join(', ');
  }

}
