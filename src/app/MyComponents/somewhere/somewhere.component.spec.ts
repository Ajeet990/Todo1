import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomewhereComponent } from './somewhere.component';

describe('SomewhereComponent', () => {
  let component: SomewhereComponent;
  let fixture: ComponentFixture<SomewhereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomewhereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomewhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
