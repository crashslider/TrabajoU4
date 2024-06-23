import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login() {
    // Aquí se puede agregar la lógica de validación del login
    // Por ahora, redirige directamente a la página principal
    this.router.navigate(['/home']);
  }
}
