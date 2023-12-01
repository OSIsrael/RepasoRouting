import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nudo',
  templateUrl: './nudo.page.html',
  styleUrls: ['./nudo.page.scss'],
})
export class NudoPage implements OnInit {
  numeroRecibido: number;

  constructor(private route: ActivatedRoute) {
      this.numeroRecibido = 0;
  }

  ngOnInit() {
    const numeroParam = this.route.snapshot.params['numero'];
    this.numeroRecibido = parseInt(numeroParam, 10);
  }

}
