import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  recoverData = {
    email: ''
  };

  onRecover() {
    alert('Revisa tu correo electrónico para instrucciones sobre cómo recuperar tu contraseña');
  }
}
