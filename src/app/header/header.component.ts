import { Component, OnInit } from '@angular/core';
import { Data, Router, RoutesRecognized } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pageName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof RoutesRecognized) {
        this.pageName = data.state.root.firstChild.data.name;
      }
    });
  }

}
