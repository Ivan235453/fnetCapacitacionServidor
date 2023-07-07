import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploServicioComponent } from './ejemplo-servicio.component';

describe('EjemploServicioComponent', () => {
  let component: EjemploServicioComponent;
  let fixture: ComponentFixture<EjemploServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemploServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemploServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
