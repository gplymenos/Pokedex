import { Subject } from "rxjs";

export class PokemonService {
  currentPokemon =  new Subject<any>();
}
