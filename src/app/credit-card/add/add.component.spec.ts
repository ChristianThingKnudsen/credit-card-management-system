import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: CreditCardAddComponent;
  let fixture: ComponentFixture<CreditCardAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditCardAddComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
