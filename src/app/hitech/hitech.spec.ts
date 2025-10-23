import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hitech } from './hitech';

describe('Hitech', () => {
  let component: Hitech;
  let fixture: ComponentFixture<Hitech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hitech]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hitech);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
