import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBecomingComponent } from './our-becoming';

describe('OurBecomingComponent', () => {
  let component: OurBecomingComponent;
  let fixture: ComponentFixture<OurBecomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBecomingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBecomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
