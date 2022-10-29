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

  onClick(e: any) {
    console.log('Ho cliccato');
    console.log(e);
  }

  onInput(e: Event) {
    console.log(e);
    console.log((<HTMLInputElement>e.target).value);
  }
}
