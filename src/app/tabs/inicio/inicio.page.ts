import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage  {
  numeroIngresado: number;

  constructor(private router: Router) {
    this.numeroIngresado = 0;
  }

  enviarNumero() {
    if (!isNaN(this.numeroIngresado)) {
      this.router.navigate(['/tabs/nudo', { numero: this.numeroIngresado }]);
    }
  }
}
