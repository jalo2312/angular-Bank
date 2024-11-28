import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    firstName: '',
    secondName: '',
    lastName: '',
    motherLastName: '',
    birthDate: '',
    gender: '',
    documentType: '',
    documentNumber: '',
    civilStatus: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    country: '',
    monthlyIncome: '',
    employer: '',
    password: '',
    confirmPassword: '',
    captcha: '',
    identityDocument: null,
    financialDocument: null
  };

  constructor(private router: Router) {}

  onRegister() {
    // Verificar que las contraseñas coinciden
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Aquí agregar la lógica para enviar los datos al backend
    console.log(this.registerData);

    // Redirigir al usuario a la página de inicio o login después de registrarse
    this.router.navigate(['/login']);
  }
}
