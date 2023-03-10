import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidNavbarLayoutComponent } from './void-navbar-layout.component';

describe('VoidNavbarLayoutComponent', () => {
  let component: VoidNavbarLayoutComponent;
  let fixture: ComponentFixture<VoidNavbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidNavbarLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoidNavbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
