import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // Gráfica de Pie (Estado de Solicitudes)
  pieChartLabels = ['Aprobadas', 'No Aprobadas', 'Pendientes'];
  pieChartData = [120, 45, 60]; // Valores de ejemplo
  pieChartType = 'pie';
  pieChartColors = [
    {
      backgroundColor: ['#28a745', '#dc3545', '#ffc107']
    }
  ];

  // Gráfica de Barras (Solicitudes por Mes)
  barChartLabels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  barChartData = [
    { data: [30, 50, 80, 40, 60, 90], label: 'Solicitudes Aprobadas' },
    { data: [20, 30, 50, 20, 40, 70], label: 'Solicitudes No Aprobadas' },
    { data: [10, 20, 40, 30, 50, 80], label: 'Solicitudes Pendientes' },
  ];
  barChartType = 'bar';
  barChartColors = [
    { backgroundColor: '#28a745' },
    { backgroundColor: '#dc3545' },
    { backgroundColor: '#ffc107' }
  ];
}
