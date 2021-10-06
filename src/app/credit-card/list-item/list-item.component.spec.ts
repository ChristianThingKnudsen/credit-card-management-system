import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: CreditCardListItemComponent;
  let fixture: ComponentFixture<CreditCardListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCardListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
