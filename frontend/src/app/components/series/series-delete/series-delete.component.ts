import { Series } from '../series.model';
import { Router, ActivatedRoute } from '@angular/router';
import { SeriesService } from '../series.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series-delete',
  templateUrl: './series-delete.component.html',
  styleUrls: ['./series-delete.component.css']
})
export class SeriesDeleteComponent implements OnInit {
  series: Series;

  constructor(
    private seriesService: SeriesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.series = { nome: "", temporadas: "", descricao:"" };
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id") || 0;
    id = +id;
    this.seriesService.readById(id).subscribe((series) => {
      this.series = series;
    })
  }

  deleteSeries(): void {
    this.seriesService.delete(this.series.id || 0).subscribe(() => {
      this.seriesService.showMessage("Série excluída com sucesso!");
      this.router.navigate(["/series"]);
    })
  }

  cancel(): void {
    this.router.navigate(["/series"]);
  }

}
