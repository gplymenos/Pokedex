import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PokemonService {
  currentPokemon =  new Subject<any>();
}
