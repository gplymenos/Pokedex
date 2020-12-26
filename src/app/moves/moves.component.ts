import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {
  allMoves = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.fetch('https://pokeapi.co/api/v2/move/').subscribe((moves: any) => {
      moves.results.forEach(move => {
        this.postService.fetch(move.url).subscribe((moveDetails:any) => {
          moveDetails.name = moveDetails.name.split('-').join(' ');
          this.allMoves.push(moveDetails);
        })
      });
    });
  }
}
