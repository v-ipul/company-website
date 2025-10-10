import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactForm } from './my-contact-form';

describe('MyContactForm', () => {
  let component: MyContactForm;
  let fixture: ComponentFixture<MyContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
