import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Series } from '../series.model';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-create',
  templateUrl: './series-create.component.html',
  styleUrls: ['./series-create.component.css']
})
export class SeriesCreateComponent implements OnInit {
  series: Series = {
    nome: "Supergirl",
    temporadas: "6 temporadas",
    descricao: "Kara Zor-El escapou de seu planeta quando tinha 12 anos de idade. Desde que chegou à Terra, ela conseguiu esconder seus poderes, os quais compartilha com seu primo, o Super-Homem. Mas agora, ela ajuda a proteger os cidadãos de National City.",
  }

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit(): void {
  }

  createSeries(): void {
    this.seriesService.showMessage("Série cadastrada!");
  }

  cancel(): void {
    this.router.navigate(["/series"]);
  }
}

