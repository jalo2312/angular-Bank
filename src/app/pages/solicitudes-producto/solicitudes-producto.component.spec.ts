import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesProductoComponent } from './solicitudes-producto.component';

describe('SolicitudesProductoComponent', () => {
  let component: SolicitudesProductoComponent;
  let fixture: ComponentFixture<SolicitudesProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
