import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  allPokemon = [];

  constructor(private postService: PostService, private pokemonService: PokemonService) { }

  ngOnInit() {
    this.postService.fetchAll().subscribe((allPokemon: any) => {
      allPokemon.results.forEach(pokemon => {
        this.postService.fetch(pokemon.url).subscribe(pokemonDetails => {
          this.allPokemon.push(pokemonDetails);
        })
      });
    });
  }

  orderById() {
    const sorted = this.allPokemon.sort((a, b) => a['id'] > b['id'] ? 1 : a['id'] === b['id'] ? 0 : -1);
    if ('id'.charAt(0) === '-') { sorted.reverse(); }
    return sorted;
  }

  displayDetails(displayDetails: any) {
    this.pokemonService.currentPokemon.next(displayDetails);
  }

}
