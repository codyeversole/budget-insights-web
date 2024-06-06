import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageNavComponent } from './landing-page-nav.component';
import { KeycloakService } from 'keycloak-angular';

describe('LandingPageNavComponent', () => {
  let component: LandingPageNavComponent;
  let fixture: ComponentFixture<LandingPageNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LandingPageNavComponent ],
      providers: [ KeycloakService ]
    });
    fixture = TestBed.createComponent(LandingPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
