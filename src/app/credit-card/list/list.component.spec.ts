import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CreditCardListComponent;
  let fixture: ComponentFixture<CreditCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
