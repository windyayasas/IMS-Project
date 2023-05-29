import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizegivingparentComponent } from './prizegivingparent.component';

describe('PrizegivingparentComponent', () => {
  let component: PrizegivingparentComponent;
  let fixture: ComponentFixture<PrizegivingparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizegivingparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizegivingparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
