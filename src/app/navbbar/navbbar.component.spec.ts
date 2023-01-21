import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbbarComponent } from './navbbar.component';

describe('NavbbarComponent', () => {
  let component: NavbbarComponent;
  let fixture: ComponentFixture<NavbbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
