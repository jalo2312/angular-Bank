import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí va la lógica de validación de usuario, por ejemplo, verificar las credenciales
    if (this.loginData.email === 'cliente@example.com' && this.loginData.password === 'password') {
      // Redirigir dependiendo del perfil del usuario
      if (this.loginData.email.includes('cliente')) {
        this.router.navigate(['/client-dashboard']);
      } else if (this.loginData.email.includes('empleado')) {
        this.router.navigate(['/employee-dashboard']);
      }
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
