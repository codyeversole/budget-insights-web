import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageNavComponent } from './landing-page-nav/landing-page-nav.component';
import { LandingPageFooterComponent } from './landing-page-footer/landing-page-footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, LandingPageNavComponent, LandingPageFooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent {

  constructor() { }

}
