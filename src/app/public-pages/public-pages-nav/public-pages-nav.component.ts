import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakService } from 'keycloak-angular';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-public-pages-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-pages-nav.component.html',
  styleUrls: ['./public-pages-nav.component.scss']
})
export class PublicPagesNavComponent {

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
