import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynFieldComponent } from './dyn-field.component';

describe('DynFieldComponent', () => {
  let component: DynFieldComponent;
  let fixture: ComponentFixture<DynFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
