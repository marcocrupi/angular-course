# AngularCourse

Link al corso: https://youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ

## Spiegazione File - LEZIONE 2

### FILE "ESTERNI"

.browserslistrc è un file utilizzato dal sistema di build, per aggiustare il css e il js in base al supporto dei vari browser. Sono elencati i vari browser che vogliamo supportare.

.editorconfig possiamo specificare delle regole per l'editor, sono legate al modo in cui noi andiamo a scrivere.

.gitignore serve a dire quali file andiamo a salvare sul nostro repository e quali no. In genere non si mandano i node modules, poiché sono pesanti, basta fare npm install ogni volta che cloniamo il progetto da GitHub.

angular.json sono dati relativi ad Angular.

karma.conf.js serve per i test.

package-lock.json & package.json sono entrambi legati a node ed ai vari pacchetti. Il package-lock è una versione avanzata del package.json.

README.md serve a farci vedere velocemente come usare Angular.

tsconfig.app.json è la configurazione di Typescript e ci indica i file a cui fa riferimento.

tsconfig.json è la struttura di dati che servono al compilatore Typescript.

tsconfig.spec.json è legata al testing di Typescript.

### FILE NELLA CARTELLA SRC

Nella cartella app abbiamo i file:

* app.module.ts è un file di "censimento", in declarations c'è la lista dei componenti che abbiamo, in imports la lista dei moduli che vogliamo utilizzare, ed infine i services. Tutto quello che utilizziamo in Angular deve passare da qua.
* Abbiamo inoltre i 3 file dei componenti (.ts - .html - .css).
* app-routing.module.ts un altro modulo che non fa altro che gestire il routing, ovvero il cambio delle pagine fittizio.

Nella cartella assets si inseriscono i file che vogliamo utilizzare, come immagini, icone, pdf ecc... 

Nella cartella enviroments abbiamo i file:

* environment.prod.ts è l'ambiente di produzione, qua dentro andremo a mettere delle variabili, sono delle variabili che cambieranno in base all'ambiente, quando saremo in fase di deploy Angular è in grado di capire se siamo in produzione o in test. 
* environment.ts è l'ambiente di sviluppo

La favicon.ico non ha bisogno di presentazioni.

index.html da cui parte tutto.

main.ts è il file da cui parte tutta l'applicazione Angular. Noi mandiamo a schermo index.html ma è da qui che parte tutto. Da notare tra le linee di codice l'enviroment e l'AppModule.

polyfills.ts è per il supporto dei vari browser.

styles.scss (o css) è lo stile globale dell'app.

test.ts serve per il test (non lo useremo in questo corso).

### LANCIARE L'APP IN LOCALE

Per lanciare l'applicazione in locale scrivere nel terminale:

ng serve

Possiamo usare anche il comando:

npm start

Tutto quello che appare nella home si trova in app.component.html

## Componenti - LEZIONE 3

Il loro punto di forza è che si possono riutilizzare e personalizzare nelle varie parti dell'app.

In app abbiamo il primo componente, il fatto che si chiami app.component è perché viene creato da Angular in modo predefinito.

Noi abbiamo tre file ma potremmo averli tutti in app.component.ts, invece preferiamo dividere il codice in 3 file (invece di mettere l'indirizzo del file andrebbe inserito direttamente il codice nei relativi spazi).

Analizziamo il componente che Angular ha creato di default, nello specifico il file app.component.ts:

```ts
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
}
```

Per creare un nuovo componente dobbiamo scrivere nel terminale:

ng g c prova

Dove "g" sta per generate e "c" sta per component.

Verrà generata una cartella con i file tipici dei componenti Angular che abbiamo visto prima. 

Un'altra cosa che è successa è l'update di app.module.ts, potevamo farlo a mano ma con una semplice riga di terminale abbiamo avuto tutto automatizzato. 

Questo è il file .ts che ha generato:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
})

// Presenta una differenza col component creato di default,
// c'è OnInit e il costruttore.
export class ProvaComponent implements OnInit {
  constructor() {}

  // ng è Angular, On è un event, Init sta per Initialization
  ngOnInit(): void {}
}
```

Puliamo il file app.component.html e inseriamo semplicemente il selettore:  

```html
<app-prova></app-prova>
```

Comparirà l'HTML presente nel nostro componente, Angular riconosce in automatico il selettore. Questo perché il componente è nelle declaration presente nel file .ts del componente di default. Posso anche duplicare il componente all'interno della stessa pagina.
