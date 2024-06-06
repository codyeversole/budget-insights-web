import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageFooterComponent } from './landing-page-footer.component';

describe('LandingPageFooterComponent', () => {
  let component: LandingPageFooterComponent;
  let fixture: ComponentFixture<LandingPageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ LandingPageFooterComponent ]
    });
    fixture = TestBed.createComponent(LandingPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
