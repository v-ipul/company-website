import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acfoundation } from './acfoundation';

describe('Acfoundation', () => {
  let component: Acfoundation;
  let fixture: ComponentFixture<Acfoundation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acfoundation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acfoundation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
