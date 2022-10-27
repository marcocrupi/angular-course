# AngularCourse

Link al corso: https://youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ

## Spiegazione File - LEZIONE 2

La lezione 1 era solo una panoramica del corso, l'ho esclusa dalla trascrizione del corso.

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

- app.module.ts è un file di "censimento", in declarations c'è la lista dei componenti che abbiamo, in imports la lista dei moduli che vogliamo utilizzare, ed infine i services. Tutto quello che utilizziamo in Angular deve passare da qua.
- Abbiamo inoltre i 3 file dei componenti (.ts - .html - .css).
- app-routing.module.ts un altro modulo che non fa altro che gestire il routing, ovvero il cambio delle pagine fittizio.

Nella cartella assets si inseriscono i file che vogliamo utilizzare, come immagini, icone, pdf ecc...

Nella cartella enviroments abbiamo i file:

- environment.prod.ts è l'ambiente di produzione, qua dentro andremo a mettere delle variabili, sono delle variabili che cambieranno in base all'ambiente, quando saremo in fase di deploy Angular è in grado di capire se siamo in produzione o in test.
- environment.ts è l'ambiente di sviluppo

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
import { Component } from "@angular/core";

// Questo è un decorator, serve a decorare le classi in Angular,
// ci permette di decorare una classe specificando che cos'è, ovvero un componente
@Component({
  // Questo selettore punta ad "app-root" che si trova in index.html nel body.
  selector: "app-root",

  // Questo è l'HTML del componente.
  templateUrl: "./app.component.html",

  // Questo è il CSS del componente, è un array, ciò ci permette di averne più di uno.
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-course";
}
```

Per creare un nuovo componente dobbiamo scrivere nel terminale:

ng g c prova

Dove "g" sta per generate e "c" sta per component.

Verrà generata una cartella con i file tipici dei componenti Angular che abbiamo visto prima.

Un'altra cosa che è successa è l'update di app.module.ts, potevamo farlo a mano ma con una semplice riga di terminale abbiamo avuto tutto automatizzato.

Questo è il file .ts che ha generato:

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-prova",
  templateUrl: "./prova.component.html",
  styleUrls: ["./prova.component.scss"],
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

## Angular Material Design - LEZIONE 4

Angular Material Design è un framework CSS creato da Google in formato specifico per Angular.

Il link del progetto è https://material.angular.io/

Apriamo la documentazione di Angular Material: https://material.angular.io/guide/getting-started

Installiamo con il comando:

ng add @angular/material

Proviamo a mostrare un componente, c'è la relativa sezione "Display a component" nella documentazione.

Come scritto nelle istruzioni dobbiamo fare l'import su app.module.ts.

Copiamo ed incolliamo il tag dello slider nel nostro componente di prova. Potrebbe non vedersi niente perché dobbiamo riavviare il server.

Quando andiamo su un componente in particolare alla voce API troviamo la riga di codice per importare il componente.

Su example abbiamo sia la preview del componente sia la possibilità di copiare il codice in tutte le sue parti, quindi html, css e Typescript.

Potremmo avere un problema sui bottoni se non importiamo l'API dei bottoni, questo perché alcuni componenti sono composti da altri componenti.

Esiste su StackOverflow qualcuno che ha creato un modulo a parte per Angular Material così da non dover ogni volta importare manualmente il codice nel nostro modulo, ciò però richiede soluzioni più avanzate per aggirare i possibili problemi che potrebbero derivare da ciò.

## Ciclo di vita dei componenti - LEZIONE 5

Sulla nostra single page application quando cambiamo pagina cambia il contenuto, quindi abbiamo dei componenti che vengono creati e distrutti continuamente.

Schema di un ciclo di vita di un componente:

![alt text](/src/assets/img/component_lifecycle.png)

ngOnInit() l'avevamo già incontrato, ed era stato creato automaticamente da Angular non appena abbiamo creato il componente prova.

Non appena viene inizializzato il componente fa un controllo ngDoCheck().

Poniamo il caso non ci sia niente in questo controllo si passa a ngAfterContentInit(), il content non è altro che il testo, tutto ciò che è all'interno dei tag html.

Dopo che viene inizializzato il conenuto viene controllato, ngAfterContentChecked().

Dopodiché viene inizializzata la view con ngAfterInit(), la view è la parte visibile del componente, ovvero il risultato finale.

La view viene anch'essa controllata, ngAfterViewChecked(), ed il componente rimane visibile sullo schermo fino a che noi non lo distruggiamo ngOnDestroy.

I metodi in rosso vengono chiamati una volta sola, ovvero quando il componente viene creato, quelli in verde vengono chiamati ogni volta che succede qualcosa.

ngOnChanges() vuol dire che il nostro componente è sempre in ascolto e che possiamo interagirci. Il componente può mutare e quindi va effettuato un controllo su di esso, ngDoCheck(), va fatto un check sul contenuto per vedere se è cambiato qualcosa, ngAfterContentChecked() ed infine il check sulla view, ngAfterViewChecked().

Questo ciclo di vita ci permette di andare a fare cose mirate quando succedono determinati eventi.

Adesso vediamo in pratica alcuni esempi.

Apriamo il componente prova.component.ts e impostiamo i controlli inserendo un console.log.

```ts
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-prova",
  templateUrl: "./prova.component.html",
  styleUrls: ["./prova.component.scss"],
})

// Presenta una differenza col component creato di default,
// c'è OnInit e il costruttore.
// Oltre OnInit che era di default aggiungiamo tutti gli altri controlli del lifecycle.
export class ProvaComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy
{
  constructor() {
    console.log("costruttore");
  }
  // Tramite la correzione rapida abbiamo implementato tutte le interfacce
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  // ng è Angular, On è un event, Init sta per Initialization
  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
```

Questo è l'ordine in cui appariranno sulla console.

* Dalla console come primo elemento appare il costruttore, dopodiché appare ngOnInit perché il componente deve essere inizializzato. 
* ngDoCheck fa i vari controlli del caso, se abbiamo delle regole sul check le andrà a rispettare. 
* ngAfterContentInit dopo che il contenuto è stato inizializzato.
* ngAfterContentChecked dopo che il contenuto è stato controllato.
* ngAfterViewInit
* ngAfterViewChecked
* ngDoCheck non appena ha finito di inizializzare tutto fa un altro controllo e realizza altri due controlli qui di seguito.
* ngAfterContentChecked
* ngAfterViewChecked

Se succede qualcos'altro, come scambiare dati tra i vari componenti, il componente allora subirà dei cambiamenti che faranno partire i vari controlli.

Se ad esempio ci spostassimo su un'altra pagina allora arriverebbe ngOnDestroy.

Quindi un componente nasce, cresce e muore ma nel mezzo fa anche vari controlli, su ognuno di essi possiamo realizzare delle operazioni.
