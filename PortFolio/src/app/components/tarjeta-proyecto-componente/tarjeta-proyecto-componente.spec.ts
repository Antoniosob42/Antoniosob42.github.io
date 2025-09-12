import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProyectoComponente } from './tarjeta-proyecto-componente';

describe('TarjetaProyectoComponente', () => {
  let component: TarjetaProyectoComponente;
  let fixture: ComponentFixture<TarjetaProyectoComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProyectoComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaProyectoComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
