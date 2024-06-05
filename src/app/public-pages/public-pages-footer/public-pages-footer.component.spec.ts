import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublicPagesFooterComponent } from './public-pages-footer.component';

describe('PublicPagesFooterComponent', () => {
  let component: PublicPagesFooterComponent;
  let fixture: ComponentFixture<PublicPagesFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ PublicPagesFooterComponent ]
    });
    fixture = TestBed.createComponent(PublicPagesFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
