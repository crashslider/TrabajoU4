import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.page.html',
  styleUrls: ['./tramites.page.scss'],
})
export class TramitesPage {

  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
