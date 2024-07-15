import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitfriendsComponent } from './profitfriends.component';

describe('ProfitfriendsComponent', () => {
  let component: ProfitfriendsComponent;
  let fixture: ComponentFixture<ProfitfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitfriendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfitfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
