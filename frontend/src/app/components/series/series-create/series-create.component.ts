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
    nome: "",
    temporadas: "",
    descricao: "",
  }

  constructor(private seriesService: SeriesService, private router: Router) { }

  ngOnInit(): void {}

  createSeries(): void {
    this.seriesService.create(this.series).subscribe(() => {
      this.seriesService.showMessage("Série cadastrada!");
      this.router.navigate(["/series"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/series"]);
  }
}

