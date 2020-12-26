import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
import { PokemonService } from '../../shared/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemonDetails: any;
  closeResult: string;
  modalOpen: boolean;
  modalSub: Subscription;
  @ViewChild('mymodal') mymodal: TemplateRef<any>;
  
  constructor(private pokemonService: PokemonService, private modalService: ModalService, private ngModalService: NgbModal) { }

  ngOnInit() {
    this.pokemonService.currentPokemon.subscribe(pokemon => {
      this.pokemonDetails = pokemon;
    });

    this.modalSub = this.modalService.modalOpen.subscribe((modalOpen: boolean) => {
      if (modalOpen)
        this.open();
    });
  }

  getType() {
    let types = [];
    this.pokemonDetails.types.map(type => {
      types.push(type.type.name);
    })

    return types.join(', ');
  }

  open() {
    const content = this.mymodal;
    this.ngModalService.open(content);
  }

  ngOnDestroy() {
    this.modalSub.unsubscribe();
  }
}
