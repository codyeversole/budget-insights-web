import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { UserService } from '../../shared/services/user-service';

@Component({
  selector: 'app-landing-page-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page-nav.component.html',
  styleUrls: ['./landing-page-nav.component.scss']
})
export class LandingPageNavComponent {

  isLoggedIn = this.keycloakService.isLoggedIn();

  constructor(
    private keycloakService: KeycloakService,
    public userService: UserService
  ) { }

  public login(): void {
    this.keycloakService.login();
  }

  public logout(): void {
    this.keycloakService.logout();
  }

  public register(): void {
    this.keycloakService.register();
  }

}
