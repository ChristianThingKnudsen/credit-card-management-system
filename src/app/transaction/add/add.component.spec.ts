import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: TransactionAddComponent;
  let fixture: ComponentFixture<TransactionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
