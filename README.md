# Corso di Angular

Link al corso: https://youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ

## Installazione Angular e creazione progetto - LEZIONE 1

**Installare Angular CLI:**

npm install -g @angular/cli

**Creare un nuovo progetto Angular:**

ng new my-first-project

cd my-first-project

ng serve

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

- Dalla console come primo elemento appare il costruttore, dopodiché appare ngOnInit perché il componente deve essere inizializzato.
- ngDoCheck fa i vari controlli del caso, se abbiamo delle regole sul check le andrà a rispettare.
- ngAfterContentInit dopo che il contenuto è stato inizializzato.
- ngAfterContentChecked dopo che il contenuto è stato controllato.
- ngAfterViewInit
- ngAfterViewChecked
- ngDoCheck non appena ha finito di inizializzare tutto fa un altro controllo e realizza altri due controlli qui di seguito.
- ngAfterContentChecked
- ngAfterViewChecked

Se succede qualcos'altro, come scambiare dati tra i vari componenti, il componente allora subirà dei cambiamenti che faranno partire i vari controlli.

Se ad esempio ci spostassimo su un'altra pagina allora arriverebbe ngOnDestroy.

Quindi un componente nasce, cresce e muore ma nel mezzo fa anche vari controlli, su ognuno di essi possiamo realizzare delle operazioni.

## Databinding - LEZIONE 6

Se io copio e incollo il componente realizzato precedentemente mi troverò degli elementi tutti uguali nella pagina, ma è molto improbabile che noi abbiamo bisogno di un componente sempre uguale.

Nel caso dell'esempio precedente vogliamo ad esempio che la card sia esteticamente uguale ma mostri diversi tipi di cane per ogni elemento. Quindi vogliamo modificare i dati all'interno.

Viene in nostro aiuto il databinding, che vuole dire legare i dati.

La parte logica prende il nome di model, ed è quella nel file Typescript del componente, mentre la view è la parte grafica e si trova nel file html. Quindi il databinding consiste nel collegare i dati presenti nella parte logica a ciò che l'utente vede a schermo, ma anche viceversa, perché possiamo collegare i componenti che leghiamo a schermo con ciò che succede dietro.

Il databinding si scompone in due categorie:

- one-way (una direzione): portiamo i dati dalla logica al componente view, oppure dal componente alla logica.
- two-way (doppia direzione): i dati vengono passati da ambo le parti in contemporanea.

Tipi di data binding (li vedremo in dettaglio nelle prossime lezioni):

- String interpolation (interpolazione delle stringhe): serve per mandare a schermo dei dati, per esempio potremmo cambiare il nome del cane facendo comparire il valore stringa di una variabile.
- Property binding: non è con i dati che mostriamo a schermo ma con le proprietà degli elementi html, per esempio potremmo mostrare una classe css in base a un tipo di dato.
- Event binding: al contrario dei due precedenti questo tipo di databinding lega gli eventi che compaiono nella view e li mandiamo a typescript, per esempio quando clicco sui vari bottoni deve accadere qualcosa.
- Two-way binding: un esempio di questo tipo di databinding è il form, in cui prendiamo dei dati da typescript ma se succede qualcosa li andiamo a cambiare. Per esempio un input che manda il nome del cane nella card modificando il valore di una proprietà.

I primi tre sono one-way mentre l'ultimo come suggerisce il nome è two-way. Quindi esistono 4 modi di fare databinding.

## String interpolation - LEZIONE 7

Con string interpolation noi vogliamo mandare a schermo dei dati, la prima cosa da sapere è che string interpolation ci permette di fare l'interpolazione a schermo con qualsiasi cosa che sia una stringa: possiamo inserire una stringa, una proprietà che richiama una stringa e qualsiasi metodo che riporta una stringa, possiamo anche avere dei numeri che però siano convertiti in stringa.

Qui lavoreremo in un'applicazione fittizia ma in un contesto reale i dati arrivano dal backend.

Creiamo un array di oggetti:

```ts
cani = [
  {
    nome: "roger",
    razza: "golden",
    descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
  },
];
```

Noi vogliamo prendere questi dati che fittizziamente ci sono arrivati dal database.

Per usare la string interpolation mi sposto sul file html e dove vanno inseriti i dati inserisco le doppie parentesi graffe, in esse posso usare una qualunque espressione di typescript, quindi posso metterci dentro una funzione, posso richiamare un valore, usare i ternary operator ecc..

```ts
  <mat-card-title>{{ cani[0].nome.toUpperCase() }}</mat-card-title>
```

Oltre ad aver richiamato la proprietà dall'oggetto cani, ho applicato ad essa un metodo stringa.

Uno dei limiti di questi blocchi con le doppie parentesi graffe è che non possiamo scrivere codice su più righe, quindi non possiamo fare if, for ecc... possiamo sostituire gli if con i ternary operator.

Ricapitolando le string interpolation sono semplicemente due parentesi graffe che si usano sul file html, dentro ci va qualsiasi cosa che può essere convertito in stringa.

## Property binding - LEZIONE 8

Il property binding consiste nel collegare dei dati che abbiamo in Typescript al nostro componente html.

Con questa forma di databinding non vogliamo mandare a schermo direttamente un dato ma vogliamo ad esempio cambiare un'immagine, la funzionalità di un bottone, la classe che gli assegniamo ecc...

Facciamo un esempio inserendo un bottone nell'html del componente (prendiamolo ma Angular Material).

Inseriamo l'attributo disabled nel bottone, possiamo assegnarli o true (pulsante disabilitato, non si può premere) o false (pulsante abilitato, si può premere).

Esempio codice html:

```html
<button mat-raised-button color="primary" disabled="false">Primary</button>
```

Questa funzionalità può essere utile quando per esempio vogliamo che questo bottone diventi attivo o venga disabilitato a seconda dello stato di completamento di un form.

Per collegare l'attributo html a una proprietà in typescript dobbiamo usare le parentesi quadre nel codice html e riportare solo il nome della proprietà come valore nel seguente modo:

```html
<button mat-raised-button color="primary" [disabled]="isDisabled">
  Primary
</button>
```

Con questa porzione di codice Typescript possiamo abilitare e disabilitare il pulsante a intervalli di 2 secondi l'uno dall'altro:

```ts
 ngOnInit(): void {
    console.log('ngOnInit');
    // In questo modo disabilitiamo e abilitiamo il pulsante ogni 2 secondi
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);
  }
```

Questo è un esempio per farci capire come grazie al property binding abbiamo collegato l'attributo disabled alla logica del componente che cambia la proprietà in modo dinamico.

Andiamo a fare un altro esempio usando una card, stavolta voglio cambiare l'immagine al verificarsi di determinate condizioni.

Creiamo due proprietà "immagine1" e "immagine2" con valore dei link diretti a due immagini nel file Typescript.

Creiamo un setInterval come fatto per l'esempio precedente.

Nella card html applicare il property binding su src.

Con il seguente codice possiamo cambiare l'immagine ogni secondo:

```ts
immagine = "";
immagine1 =
  "https://gametimers.it/wp-content/uploads/2022/06/Berserk-Riprende-Serializzazione-Dopo-Un-Anno-Morte-Kentaro-Miura-747x420.jpeg.webp";
immagine2 =
  "https://www.carteltec.com/wp-content/uploads/2021/07/1627566486_Berserk-las-noticias-no-son-buenas-sobre-el-futuro-del.jpeg";

  ngOnInit(): void {
    // In questo modo cambiamo immagine
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.immagine = this.immagine1;
      } else {
        this.immagine = this.immagine2;
      }
      counter++;
    }, 1000);
  }
```

## Event binding - LEZIONE 9

Event binding vuol dire legare ciò che succede nel nostro componente a livello utente a Typescript.

A questo giro lavoriamo direttamente su app.component.

Inseriamo un bottone, ad esempio questo:

```html
<button mat-raised-button color="accent">Accent</button>
```

A questo punto vogliamo aggiungere quello che è un evento, in JavaScript avremmo inserito "onclick" oppure gli addeventListener, Angular ha un suo modo di gestire gli eventi, basta aprire le parentesi tonde per avere la lista completa di essi, a noi interessa click:

```html
<button mat-raised-button color="accent" (click)="onClick()">Primary</button>
```

Non ci resta che creare un metodo onClick() nel relativo file .ts:

```ts
export class AppComponent {
  title = "angular-course";

  onClick() {
    console.log("Ho cliccato");
  }
}
```

Adesso abbiamo le basi per poter fare qualcosa di dinamico, sul click del bottone possiamo cambiare il css e tanto altro.

Per passare dei dati non possiamo fare granché con un bottone, però vediamo una cosa:

```html
<button mat-raised-button color="accent" (click)="onClick(this)">
  Primary
</button>
```

```ts
export class AppComponent {
  title = "angular-course";

  onClick(e: any) {
    console.log("Ho cliccato");
    console.log(e);
  }
}
```

Questo codice mi permetterà di vedere sulla console il componente, quindi con this possiamo passare il componente.

Con this possiamo andare a prendere l'evento, ciò ha molto più senso con l'input.

Andiamo su Angular Material e importiamo un campo di input in app.component.html.

```html
<mat-form-field class="example-full-width" appearance="fill">
  <mat-label>Favorite food</mat-label>
  <!-- $event è una variabile particolare, è proprietaria di Angular, si usa negli eventi,
  vengono registrati qui i dati dell'evento -->
  <input
    matInput
    placeholder="Ex. Pizza"
    (input)="onInput($event)"
    value="Sushi"
  />
</mat-form-field>
```

Creo il metodo onInput() nel file .ts del componente:

```ts
export class AppComponent {
  title = "angular-course";

  onInput(e: any) {
    console.log(e);
  }
}
```

Nella console apparirà il valore immesso nel campo di input. Per ogni carattere che viene inserito troviamo un sacco di informazioni riportate in questa variabile. Tra le informazioni che a noi interessano maggiormente in questa variabile è il value, per recuperare il valore dovremmo scrivere nel seguente modo:

```ts
export class AppComponent {
  title = "angular-course";

  onInput(e: any) {
    console.log(e.target.value);
  }
}
```

Il tipo "any" però in questo contesto non va bene, è troppo generico, dobbiamo modificarlo, possiamo assegnare il tipo "Event". Facendo così però darà errore su e.target.value, in questo caso va fatto un casting, che altro non è che una conversione. Dobbiamo modificare il codice nel seguente modo:

```ts
export class AppComponent {
  title = "angular-course";

  onInput(e: any) {
    console.log((<HTMLInputElement>e.target).value);
  }
}
```

## Two-way binding - LEZIONE 10

Come già detto il two way binding consiste nel collegare la parte logica al componente html da ambo i lati.

Quindi TypeScript influisce sull'html, ma anche quest'ultimo va a cambiare TypeScript.

Torniamo un attimo all'input precedente, vediamo come esso può andare a influenzare altre parti del componente.

Aggiungiamo al codice html il seguente tag con la string interpolation:

```html
<p>{{ inputValue }}</p>
```

Nel file TypeScript invece aggiungiamo la proprietà "inputValue" e assegniamogli il valore digitato in input:

```ts
export class AppComponent {
  title = "angular-course";
  inputValue = "Compilare l'input per cambiare questo testo";

  onClick(e: any) {
    console.log("Ho cliccato");
    console.log(e);
  }

  onInput(e: Event) {
    console.log(e);
    console.log((<HTMLInputElement>e.target).value);
    this.inputValue = (<HTMLInputElement>e.target).value;
  }
}
```

Ogni volta che digiteremo qualcosa nel campo di input apparirà in tempo reale sulla pagina html.

Ma questo che abbiamo visto non è two-way binding ma semplicemente event binding.

Se noi vogliamo cambiare la variabile in modo tale che vada ad aggiornare anche il nostro campo di input, magari al click del bottone dobbiamo fare nel seguente modo:

```html
<!-- Per usare insieme il property binding e l'event binding dobbiamo sostituire 
questo (input)="onInput($event)" con [(ngModel)]="inputValue" colleghiamo quindi l'input direttamente alla proprietà -->
<input matInput placeholder="Ex. Pizza" [(ngModel)]="inputValue" value="" />
```

Una volta digitato ciò ci darà errore, questo perché dobbiamo importare in app.module.ts il modulo di Angular FormsModule.

ngModel è una direttiva, argomento che affronteremo nelle prossime lezioni. Questa direttiva dice di connettere ngModel sia in entrata come evento sull'input (cioè quando utilizzo il mio input è un evento), ma quando arriva qualcosa da TypeScript è property binding.

Quindi grazie alle parentesi tonde che rappesentano l'event binding quando vado a digitare nell'input vado a modificare la proprietà inputValue, ma allo stesso modo, avendo le parentesi quadre, sto facendo property binding, e quindi gli dico, quando inputValue cambia in TypeScript cambia quello che è il value del mio input.

Infatti se vado a guardare la pagina nel campo dell'input troverò il valore definito in TypeScript nella proprietà inputValue.

Modifico il metodo onClick() (che è collegato al bottone inserito precedentemente) nel seguente modo:

```ts
  onClick(e: any) {
    console.log('Ho cliccato');
    console.log(e);
    this.inputValue = "Ho cliccato sul bottone";
  }
```

Così facendo ogni volta che cliccherò sul bottone andrà a modificare il valore di inputValue, ciò modificherà anche il valore del campo di input visualizzato a schermo.

## Le direttive (directives) - LEZIONE 11

Questa sarà una lezione più teorica, nelle prossime lezioni le vedremo nello specifico.

Le direttive sono classi, servono per essere messe sugli elementi html, per andare a cambiare il comportamento di essi.

Per esempio, nella lezione precedente abbiamo usato ngModel, che non è un attributo html, ma è un qualcosa che è stato aggiunto da Angular. Le direttive cambiano il comportamento dell'elemento.

Le direttive si dividono in tre categorie:

- **Built-in**: modificano il comportamento dell'elemento, sono ad esempio NgClass, NgStyle e NgModel: https://angular.io/guide/built-in-directives
- **Attribute (personalizzate)**: modificano comportamento o apparenza di esso.
- **Structural**: cambiano il DOM aggiungendo o rimuovendo elementi, presentano un asterisco, sono *ngIf e *ngFor.

## Elementi condizionali con ngIf - LEZIONE 12

ngIf è una direttiva strutturale, tutte le direttive strutturali sono preceduta da un asterisco. Strutturale significa che va a cambiare il DOM, va ad aggiungere o eliminare degli elementi html.

ngIf ci permette di mostrare o meno un elemento in base ad una condizione.

Facciamo un esempio:

```html
<p *ngIf="4 < 5">Ciao sono un paragrafo, esempio ngIf</p>
```

Quindi se 4 e minore di 5 verrà mostrato l'elemento in cui si trova questa direttiva. Se però ad esempio mettiamo 6 < 5, condizione che risulterà falsa, allora l'elemento verrà nascosto.

ATTENZIONE ngIf non fa un display none ma va a creare o meno l'elemento in base alla condizione.

Proviamo adesso con una variabile:

```ts
isVisible = 15;
```

```html
<p *ngIf="isVisible > 10">Ciao sono un paragrafo, esempio ngIf</p>
```

Ma potremmo anche impostare la variabile su vero o falso per creare o meno l'elemento.

Dentro ngIf possiamo utilizzare gli stessi principi di un normale if. Se volessimo fare una sorta di else:

```ts
isVisible = true;
```

```html
<p *ngIf="isVisible">Ciao sono un paragrafo, esempio ngIf visibile</p>
<p *ngIf="!isVisible">Ciao sono un paragrafo, esempio ngIf non visibile</p>
```

Il codice ci dice che se isVisibile è true allora ci mostra il primo elemento, ma se è false allora ci mostra il secondo elemento.

In realtà c'è un costrutto molto più comodo, **ng-template**:

```html
<!-- bloccoElse è una variabile template, un riferimento template
(template reference) -->
<p *ngIf="isVisible; else bloccoElse">Sono visibile</p>

<!-- ng-template è un elemento che vede solo Angular, non ha alcun tipo
di impatto vero e proprio, è una sorta di contenitore che
vede solo Angular, necessario per usare la variabile template -->
<ng-template #bloccoElse><p>Non sono visibile</p></ng-template>
```

ng-template ci è molto utile perché possiamo creare una sorta di elemento con della logica aggiuntiva. Più avanti andremo ad usare più direttive strutturali che non possono essere sullo stesso elemento.

Esiste anche una variante più completa del codice con ng-template visto prima, che sfrutta then:

```html
<!-- bloccoElse è una variabile template, un riferimento template
(template reference) -->
<ng-template *ngIf="isVisible; then bloccoIf else bloccoElse"></ng-template>

<!-- ng-template è un elemento che vede solo Angular, non ha alcun tipo
di impatto vero e proprio, è una sorta di contenitore che
vede solo Angular, necessario per usare la variabile template -->
<ng-template #bloccoIf>
  <p>Sono visibile</p>
</ng-template>
<ng-template #bloccoElse>
  <p>Non sono visibile</p>
</ng-template>
```

## Creare elementi con ngFor - LEZIONE 13

È una direttiva strutturale che ci permette di ciclare dei dati che abbiamo e su questo costruire degli elementi.

In questo esempio prenderemo un array di dati e li manderemo a schermo.

Creaimo una lista per stampare l'array a schermo, verrà in nostro aiuto ngFor:

```ts
persone = [
  { nome: "Luca", cognome: "Rossi" },
  { nome: "Marco", cognome: "Verdi" },
  { nome: "Anna", cognome: "Neri" },
];
```

```html
<ul>
  <!-- Con ngFor creiamo un solo elemento come
  stampino, in cui per ogni volta che trova un
  dato ricrea lo stesso elemento ma cambiando
  i dati all'intenro -->
  <li *ngFor="let persona of persone">
    {{ persona.nome }} {{ persona.cognome }}
  </li>
</ul>
```

Noi abbiamo usato un li come elemento, ma avrebbe funzionato anche con un div o qualsiasi altro elemento, proviamo con il tag p:

```html
<p *ngFor="let persona of persone">
  <strong>{{ persona.nome }}</strong> {{ persona.cognome }}
</p>
```

Dovete immaginare che invece di applicare ngFor a un array scritto da noi, lo facciamo coi dati JSON in arrivo dal server.

Facciamo finta sia una chat, dove se la persona è online andiamo a mettere un pallino verde:

```ts
persone = [
  { nome: "Luca", cognome: "Rossi", isOnline: true },
  { nome: "Marco", cognome: "Verdi", isOnline: false },
  { nome: "Anna", cognome: "Pannocchia", isOnline: false },
  { nome: "Leonardo", cognome: "Sciascia", isOnline: true },
  { nome: "Maccio", cognome: "Capatonda", isOnline: false },
];
```

```html
<p *ngFor="let persona of persone">
  {{ persona.nome }} {{ persona.cognome }}
  <span class="cerchioVerde" *ngIf="persona.isOnline"></span
  ><span class="cerchioRosso" *ngIf="!persona.isOnline"></span>
</p>
```

```scss
.cerchioVerde {
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: green;
  border-radius: 20px;
}

.cerchioRosso {
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 20px;
}
```

Vediamo come prendere altri dati del ciclo, come ad esempio l'indice:

```html
<p *ngFor="let persona of persone; index as i">
  {{ persona.nome }} {{ persona.cognome }} - index: {{i}} - status:
  <span class="cerchioVerde" *ngIf="persona.isOnline"></span
  ><span class="cerchioRosso" *ngIf="!persona.isOnline"></span>
</p>
```

Potremmo usare l'indice in un condizionale, dove ad esempio il cerchio arancione (non c'è bisogno che mostro anche il css) appare solo dove l'indice è maggiore di 2:

```html
<p *ngFor="let persona of persone; index as i">
  {{ persona.nome }} {{ persona.cognome }} - index: {{i}} - status:
  <span class="cerchioVerde" *ngIf="persona.isOnline"></span
  ><span class="cerchioRosso" *ngIf="!persona.isOnline"></span>
  <span class="cerchioArancione" *ngIf="i > 2"></span>
</p>
```

Tra le altre variabili che potremmo prendere troviamo:

- **count**, che prende tutta la lunghezza dell'array.
- **first**, restituisce true sul primo elemento dell'array e false negli altri.
- **last**, restituisce true nell'ultimo elemento dell'array e false negli altri.
- **even**, restituisce true sugli elementi pari e false sui dispari.
- **odd**, restituisce true sugli elementi dispari e false sui pari.

Le variabili sono presenti sulla documentazione: https://angular.io/api/common/NgFor

Eccole applicate al nostro codice:

```html
<p
  *ngFor="
    let persona of persone;
    index as i;
    count as c;
    first as isFirst;
    last as isLast;
    even as isEven;
    odd as isOdd
  "
>
  {{ persona.nome }} {{ persona.cognome }} - index: {{ i }} - count: {{ c }} -
  first: {{ isFirst }} - last: {{ isLast }} - even(pari): {{ isEven }} -
  odd(dispari): {{ isOdd }} - status:
  <span class="cerchioVerde" *ngIf="persona.isOnline"></span
  ><span class="cerchioRosso" *ngIf="!persona.isOnline"></span>
  <span class="cerchioArancione" *ngIf="i > 2"></span>
</p>
```

## Condizioni multiple con ngSwitch - LEZIONE 14

Riprende le funzionalità del condizionale Swith di JavaScript, vediamolo subito in azione:

```ts
numero = 3;
```

```html
<!-- Non è una direttiva strutturale, perché non è ngSwitch
a modificare direttamente il DOM ma solleva solo casistiche,
facciamo riferimento alla variabile numero -->
<div [ngSwitch]="numero">
  <!-- Inseriamo un paragrafo per ogni condizione da
  notare che è *ngSwitchCase la direttiva struttura
  che fa riferimento alla direttiva [ngSwitch] -->
  <p *ngSwitchCase="1">Uno</p>
  <p *ngSwitchCase="2">Due</p>
  <p *ngSwitchCase="3">Tre</p>
  <p *ngSwitchCase="4">Quattro</p>
  <p *ngSwitchDefault>Default</p>
</div>
```

Vediamo ngSwitch con le stringhe:

```ts
stringa = "Topolino";
```

```html
<div [ngSwitch]="stringa">
  <!-- Se lasciamo solo le normali virgolette ci darà errore, dobbiamo
  inserire delle virgolette aggiuntive -->
  <p *ngSwitchCase="'Pippo'">Pippo</p>
  <p *ngSwitchCase="'Pluto'">Pluto</p>
  <p *ngSwitchCase="'Topolino'">Topolino</p>
  <p *ngSwitchCase="'Paperino'">Paperina</p>
  <p *ngSwitchDefault>Default</p>
</div>
```

## Stile condizionale con ngStyle - LEZIONE 15

ngStyle è una direttiva che ci permette di cambiare lo stile CSS di un elemento in base ai dati del nostro componente.

Prepariamo il codice:

```html
<ul>
  <li class="ngStyleEs" *ngFor="let persona of persone">
    <div class="cerchio"></div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

```scss
li.ngStyleEs {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0;
  }
  .cerchio {
    margin-right: 10px;
    display: inline-block;
    height: 10px;
    width: 10px;
    background-color: rgb(0, 4, 255);
    border-radius: 20px;
  }
}
```

Comparirà una lista di nomi con un cerchio blu alla loro sinistra. Noi vogliamo che il cerchio cambi colore in base allo stato della persona, ovvero se è online o non online.

Vediamo come fare, più avanti vedremo ngClass, dove andremo a cambiare direttamente la classe, a questo giro modifichiamo direttamente lo stile:

```html
<ul>
  <li class="ngStyleEs" *ngFor="let persona of persone">
    <!-- Facciamo il property binding inserendo la nostra direttiva [ngStyle],
    possiamo decidere se cambiare lo stile usando la dicitura ad esempio
    marginBottom oppure usare la dicitura css inserendo le virgolette 'margin-bottom' -->
    <div class="cerchio" [ngStyle]="{'background-color':'red'}"></div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

In questo modo i pallini sono diventati rossi, ma noi possiamo anche collegare background-color a una variabile:

```ts
color = "green";
```

```html
<ul>
  <li class="ngStyleEs" *ngFor="let persona of persone">
    <div class="cerchio" [ngStyle]="{ 'background-color': color }"></div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

I pallini diventeranno verdi. Il prossimo step è prendere il colore direttamente dallo stato delle persone, usiamo il ternary operator (potremmo anche usare un metodo):

```html
<ul>
  <li class="ngStyleEs" *ngFor="let persona of persone">
    <div
      class="cerchio"
      [ngStyle]="{ 'background-color': persona.isOnline ? color : 'red' }"
    ></div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

Con ngFor abbiamo duplicato gli elementi in base ai dati ricevuti, con la string interpolation abbiamo mandato a schermo i dati effettivi e con ngStyle abbiamo letteralmente cambiato il colore in base allo status della persona.

Potremmo anche prendere il colore direttamente dall'array:

```ts
persone = [
  { nome: "Luca", cognome: "Rossi", isOnline: true, color: "blue" },
  { nome: "Marco", cognome: "Verdi", isOnline: false, color: "red" },
  { nome: "Anna", cognome: "Pannocchia", isOnline: false, color: "yellow" },
  { nome: "Leonardo", cognome: "Sciascia", isOnline: true, color: "green" },
  { nome: "Maccio", cognome: "Capatonda", isOnline: false, color: "purple" },
];
```

```html
<ul>
  <li class="ngStyleEs" *ngFor="let persona of persone">
    <div
      class="cerchio"
      [ngStyle]="{ 'background-color': persona.color }"
    ></div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

## Classi dinamiche con ngClass - LEZIONE 16

Vediamo come possiamo cambiare una classe invece di cambiare tutto lo stile a mano.

Abbiamo inserito il numero dell'indice dentro ogni pallino, vogliamo che cambi il colore in base allo stato, dettato dalla proprietà isOnline.

```scss
li.ngStyleEs {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0;
  }
  .cerchio {
    margin-right: 10px;
    display: inline-block;
    height: 30px;
    width: 30px;
    background-color: rgb(0, 4, 255);
    border-radius: 20px;
    text-align: center;
  }

  .cerchioOnline {
    background-color: green;
    color: white;
  }

  .cerchioOffline {
    background-color: red;
    color: blue;
  }
}
```

```html
<ul [ngStyle]="{ 'margin-top': '50px' }">
  <li class="ngStyleEs" *ngFor="let persona of persone; index as i">
    <!-- In ngClass possiamo aggiungere anche più classi manualmente,
    ad esempio [ngClass]="'cerchioOffline cerchioOnline'", c'è la
    possibilità di inserirle anche in un array, ma a noi non interessa,
    ci interessa la parte condizionale -->
    <div
      class="cerchio"
      [ngClass]="{
        'cerchioOnline secondaClasse': persona.isOnline,
        cerchioOffline: !persona.isOnline
      }"
    >
      {{ i }}
    </div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

Nell'esempio appena fatto abbiamo la possibilità di usare più condizioni, mentre se abbiamo una sola condizione possiamo usare il ternary operator, che nel nostro caso sarebbe:

```html
<ul [ngStyle]="{ 'margin-top': '50px' }">
  <li class="ngStyleEs" *ngFor="let persona of persone; index as i">
    <div
      class="cerchio"
      [ngClass]="persona.isOnline ? 
      'cerchioOnline :
      'cerchioOffline'"
    >
      {{ i }}
    </div>
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </li>
</ul>
```

## Come passare dei dati da un componente Parent a un Child - LEZIONE 17

Per componente Child si intende un componente contenuto all'interno di un altro componente.

Nel nostro esempio, in app.component.html abbiamo il componente app-prova, noi vogliamo passargli i dati di app.component.ts.

app.component.ts

```ts
persone = [
  { nome: "Luca", cognome: "Rossi", isOnline: true, color: "blue" },
  { nome: "Marco", cognome: "Verdi", isOnline: false, color: "red" },
  { nome: "Anna", cognome: "Pannocchia", isOnline: false, color: "yellow" },
  { nome: "Leonardo", cognome: "Sciascia", isOnline: true, color: "green" },
  { nome: "Maccio", cognome: "Capatonda", isOnline: false, color: "purple" },
];
```

app.component.html

```html
<!-- Per passare la variabile persone in app.component.ts
a prova.component dobbiamo usare il property binding -->
<app-prova [data]="persone"></app-prova>
```

prova.component.ts

```ts
// Quando si scrive, dovrebbe essere importato automaticamente
// da Angular. La variabile data quindi ha un decoratore chiamato
// Input, perché il suo valore arriva dall'esterno.
@Input() data: any;

ngOnInit(): void {
    console.log('Dati passati da app.component:', this.data);
  }
```

prova.component.html

```html
<div [ngStyle]="{ 'margin': '50px 0' }">
  <div *ngFor="let persona of data">
    <p [ngStyle]="{ color: persona.color }">
      {{ persona.nome }} {{ persona.cognome }}
    </p>
  </div>
</div>
```

Essendoci il property binding su data, vuol dire che quando cambiano i dati delle persone cambiano anche in data. Facciamo un esperimento:

app.component.ts

```ts
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
```

app.component.html

```html
<button (click)="onClickChangePersone()">Cambio Persone</button>
```

Cliccando sul bottone vengono cambiati i valori delle proprietà in persone e questi cambiamenti si riflettono anche su data, così facendo prova.component manda a schermo i nuovi valori.

Come facciamo a "prendere" i vari cambiamenti? Con onChanges:

prova.component.ts 

```ts
export class ProvaComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    // In questo modo riportiamo su console i vari cambiamenti
    // del componente.
    console.log(changes)
  }
```

In questo codice ho riportato solo le parti aggiunte relative ad OnChanges.

Pensate a un componente che continua a cambiare, noi grazie a OnChanges abbiamo accesso a molte informazioni, questa fase del ciclo di vita del componente ci permette di far succedere cose ogni volta che il componente cambia, per esempio potremmo far cambiare il layout html al cambiamento di un determinato valore.
