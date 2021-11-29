import { Series } from '../series.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SeriesService } from "./../series.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-update',
  templateUrl: './series-update.component.html',
  styleUrls: ['./series-update.component.css']
})
export class SeriesUpdateComponent implements OnInit {
  series: Series;

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.series = { nome: "", temporadas: "", descricao: ""};
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.seriesService.readById(id).subscribe((series) => {
      this.series = series;
    });
  }

  updateSeries(): void {
    this.seriesService.update(this.series).subscribe((series) => {
      this.seriesService.showMessage("Série atualizada com sucesso!");
      this.router.navigate(["/series"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/series"]);
  }

}
