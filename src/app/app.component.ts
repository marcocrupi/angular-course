import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { interval, Observable } from 'rxjs';

// Questo è un decorator, serve a decorare le classi in Angular,
// ci permette di decorare una classe specificando che cos'è, ovvero un componente
@Component({
  // Questo selettore punta ad "app-root" che si trova in index.html nel body.
  selector: 'app-root',

  // Questo è l'HTML del componente.
  templateUrl: './app.component.html',

  // Questo è il CSS del componente, è un array, ciò ci permette di averne più di uno.
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-course';
  inputValue = "Compilare l'input per cambiare questo testo";

  onClick(e: any) {
    console.log('Ho cliccato');
    console.log(e);
    this.inputValue = 'Ho cliccato sul bottone';
  }

  onInput(e: Event) {
    console.log(e);
    console.log((<HTMLInputElement>e.target).value);
    this.inputValue = (<HTMLInputElement>e.target).value;
  }

  isVisible = true;

  persone = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false, color: 'red' },
    { nome: 'Anna', cognome: 'Pannocchia', isOnline: false, color: 'yellow' },
    { nome: 'Leonardo', cognome: 'Sciascia', isOnline: true, color: 'green' },
    { nome: 'Maccio', cognome: 'Capatonda', isOnline: false, color: 'purple' },
  ];

  onClickChangePersone() {
    this.persone = [
      {
        nome: 'Luca Change',
        cognome: 'Rossi',
        isOnline: true,
        color: 'blue',
      },
      {
        nome: 'Marco Change',
        cognome: 'Verdi',
        isOnline: false,
        color: 'red',
      },
      {
        nome: 'Anna Change',
        cognome: 'Pannocchia',
        isOnline: false,
        color: 'yellow',
      },
      {
        nome: 'Leonardo Change',
        cognome: 'Sciascia',
        isOnline: true,
        color: 'green',
      },
      {
        nome: 'Maccio Change',
        cognome: 'Capatonda',
        isOnline: false,
        color: 'purple',
      },
    ];
  }

  numero = 3;
  stringa = 'Topolino';
  color = 'green';

  onRiceviDati(value: string) {
    console.log(value);
  }

  // È un decoratore che ci dice che c'è un figlio della view,
  // che si chiama inputSaluti, aggiungendo il punto esclamativo
  // assicuriamo TypeScript sul fatto che il valore non sarà
  // mai null o undefined
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  // Ci restituirà undefined, perché a ngOnInit il componente viene
  // inizializzato, non c'è ancora niente
  ngOnInit(): void {
    console.log('ngOnInit inputSaluti:', this.inputSaluti);

    // interval viene importato da rxjs, al suo interno
    // decidiamo ogni quanto tempo deve fare qualcosa
    // otteniamo un observable number
    // interval(1000).subscribe((numero) => {
    // interval ci ritorna un numero, va a fare un count
    // console.log(numero);
    // });
    // new Observable((observer) => {
      // let count = 0;
      // setInterval(() => {
        // Questo observer è ciò che effettivamente osserva,
        // e ciò che tiene il conteggio di tutto e decide quando
        // far partire gli eventi e fermarli, in questo caso con
        // .next gli stiamo dicendo di buttare fuori il valore
        // count e di passare alla prossima iterazione
        // observer.next(count);
        // count++;
      // }, 1000);
      // Essendo un observable ci dobbiamo sottoscrivere
    // }).subscribe((numero) => {
      // console.log(numero);
    // });
  }

  // ngAfterViewInit il console.log ci darà il nostro riferimento all'elemeto
  // questo è il modo corretto per accedere al ViewChild
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit inputSaluti:', this.inputSaluti);
  }

  onClickView() {
    console.log(
      'onClickView inputSaluti:',
      this.inputSaluti.nativeElement.value
    );
  }

  colore = '';

  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore;
  }

  numeroPipeLesson = 5.3435435643;

  oggi = Date.now();
}
