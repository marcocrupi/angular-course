import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Potremmo dare come tipo Observable
  sottoscrizione: any;

  constructor() {}
  ngOnInit(): void {
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      console.log(numero);
    });
  }

  // Noi vogliamo fare l'unsuscribe quando distruggiamo il
  ngOnDestroy(): void {
    this.sottoscrizione.unsuscribe();
  }
}
