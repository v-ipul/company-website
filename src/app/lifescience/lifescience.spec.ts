import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lifescience } from './lifescience';

describe('Lifescience', () => {
  let component: Lifescience;
  let fixture: ComponentFixture<Lifescience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lifescience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lifescience);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
