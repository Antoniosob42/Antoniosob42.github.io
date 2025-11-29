import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularHorasComponent } from './calcular-horas-component';

describe('CalcularHorasComponent', () => {
  let component: CalcularHorasComponent;
  let fixture: ComponentFixture<CalcularHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcularHorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcularHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
