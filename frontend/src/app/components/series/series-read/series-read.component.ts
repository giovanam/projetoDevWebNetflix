import { Component, OnInit } from '@angular/core';
import { Series } from "./../series.model";
import { SeriesService } from "../series.service";

@Component({
  selector: 'app-series-read',
  templateUrl: './series-read.component.html',
  styleUrls: ['./series-read.component.css']
})
export class SeriesReadComponent implements OnInit {
  series: Series[];
  displayedColumns = ["id", "nome", "temporadas", "descricao", "action"];
  constructor(private seriesService: SeriesService) {
    this.series = [];
   }

  ngOnInit(): void {
    this.seriesService.read().subscribe((series) => {
      this.series = series;
      console.log(series);
    })
  }

}
