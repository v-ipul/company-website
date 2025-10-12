import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Termsandcondition } from './termsandcondition';

describe('Termsandcondition', () => {
  let component: Termsandcondition;
  let fixture: ComponentFixture<Termsandcondition>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Termsandcondition]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Termsandcondition);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
