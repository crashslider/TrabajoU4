import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss'],
})
export class EmergenciaPage {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
