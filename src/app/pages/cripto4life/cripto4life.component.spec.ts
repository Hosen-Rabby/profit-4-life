import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cripto4lifeComponent } from './cripto4life.component';

describe('Cripto4lifeComponent', () => {
  let component: Cripto4lifeComponent;
  let fixture: ComponentFixture<Cripto4lifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cripto4lifeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cripto4lifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
