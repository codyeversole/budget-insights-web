import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";
import { KeycloakProfile } from "keycloak-js";

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    public userProfile: KeycloakProfile | null = null;

    constructor(
        private keycloakService: KeycloakService
      ) {
        this.keycloakService.loadUserProfile().then(userProfile => {
            this.userProfile = userProfile;
        });
      }
  }