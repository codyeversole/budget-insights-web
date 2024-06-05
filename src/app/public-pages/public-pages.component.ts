import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicPagesNavComponent } from './public-pages-nav/public-pages-nav.component';
import { PublicPagesFooterComponent } from './public-pages-footer/public-pages-footer.component';

@Component({
  selector: 'app-public-pages',
  standalone: true,
  imports: [RouterOutlet, PublicPagesNavComponent, PublicPagesFooterComponent],
  templateUrl: './public-pages.component.html',
  styleUrls: ['./public-pages.component.scss'],
})
export class PublicPagesComponent {

  constructor() { }

}
