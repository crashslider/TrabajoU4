import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
