import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicPagesComponent } from './public-pages.component';
import { KeycloakService } from 'keycloak-angular';

describe('PublicPagesComponent', () => {
  let component: PublicPagesComponent;
  let fixture: ComponentFixture<PublicPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PublicPagesComponent ],
      providers: [ KeycloakService ]
    });
    fixture = TestBed.createComponent(PublicPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
