import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profit4lifeComponent } from './profit4life.component';

describe('Profit4lifeComponent', () => {
  let component: Profit4lifeComponent;
  let fixture: ComponentFixture<Profit4lifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profit4lifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profit4lifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
