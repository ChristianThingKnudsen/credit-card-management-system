import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListItemComponent } from './list-item.component';

describe('ListItemComponent', () => {
  let component: TransactionListItemComponent;
  let fixture: ComponentFixture<TransactionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionListItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
