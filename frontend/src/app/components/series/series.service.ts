import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import { Series } from './series.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  baseUrl = "http://localhost:3001/series";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-sucess"],
    });
  }

  create(series: Series): Observable<Series> {
    return this.http.post<Series>(this.baseUrl, series);
  }
}
