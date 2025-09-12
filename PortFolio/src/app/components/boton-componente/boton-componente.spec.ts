import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonComponente } from './boton-componente';

describe('BotonComponente', () => {
  let component: BotonComponente;
  let fixture: ComponentFixture<BotonComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
