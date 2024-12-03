import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitudes-lista',
  templateUrl: './solicitudes-lista.component.html',
  styleUrl: './solicitudes-lista.component.css'
})
export class SolicitudesListaComponent {
  solicitudes = [
    {
      nombreCliente: 'Juan Pérez',
      producto: 'Cuenta de Ahorros',
      fechaSolicitud: new Date('2024-11-25'),
      estado: 'Aprobada',
    },
    {
      nombreCliente: 'María Gómez',
      producto: 'Tarjeta de Crédito',
      fechaSolicitud: new Date('2024-11-20'),
      estado: 'Pendiente',
    },
    {
      nombreCliente: 'Carlos López',
      producto: 'Préstamo Personal',
      fechaSolicitud: new Date('2024-11-18'),
      estado: 'No aprobada',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  verDetalle(solicitud: any): void {
    alert(`Detalles de la solicitud: \n\nCliente: ${solicitud.nombreCliente}\nProducto: ${solicitud.producto}\nEstado: ${solicitud.estado}`);
  }
}
