import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicPagesNavComponent } from './public-pages-nav.component';
import { KeycloakService } from 'keycloak-angular';

describe('PublicPagesNavComponent', () => {
  let component: PublicPagesNavComponent;
  let fixture: ComponentFixture<PublicPagesNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PublicPagesNavComponent ],
      providers: [ KeycloakService ]
    });
    fixture = TestBed.createComponent(PublicPagesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
