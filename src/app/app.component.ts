import { Component } from '@angular/core';

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
export class AppComponent {
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
}
