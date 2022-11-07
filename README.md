# Corso di Angular

Link al corso: https://youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ

## Installazione Angular e creazione progetto - LEZIONE 1

Installare Angular CLI:

**npm install -g @angular/cli**

Creare un nuovo progetto Angular:

**ng new my-first-project**

**cd my-first-project**

**ng serve**

## Spiegazione File - LEZIONE 2

### FILE "ESTERNI"

- **.browserslistrc** è un file utilizzato dal sistema di build, per aggiustare il css e il js in base al supporto dei vari browser. Sono elencati i vari browser che vogliamo supportare.
- **.editorconfig** possiamo specificare delle regole per l'editor, sono legate al modo in cui noi andiamo a scrivere.
- **.gitignore** serve a dire quali file andiamo a salvare sul nostro repository e quali no. In genere non si mandano i node modules, poiché sono pesanti, basta fare npm install ogni volta che cloniamo il progetto da GitHub.
- **angular.json** sono dati relativi ad Angular.
- **karma.conf.js** serve per i test.
- **package-lock.json & package.json** sono entrambi legati a node ed ai vari pacchetti. Il package-lock è una versione avanzata del package.json.
- **README.md** serve a farci vedere velocemente come usare Angular.
- **tsconfig.app.json** è la configurazione di Typescript e ci indica i file a cui fa riferimento.
- **tsconfig.json** è la struttura di dati che servono al compilatore Typescript.
- **tsconfig.spec.json** è legata al testing di Typescript.

### FILE NELLA CARTELLA SRC

Nella cartella app abbiamo i file:

- **app.module.ts** è un file di "censimento", in declarations c'è la lista dei componenti che abbiamo, in imports la lista dei moduli che vogliamo utilizzare, ed infine i services. Tutto quello che utilizziamo in Angular deve passare da qua.
- Abbiamo inoltre i 3 file dei componenti **(.ts - .html - .css)**.
- **app-routing.module.ts** un altro modulo che non fa altro che gestire il routing, ovvero il cambio delle pagine fittizio.

Nella cartella assets si inseriscono i file che vogliamo utilizzare, come immagini, icone, pdf ecc...

Nella cartella enviroments abbiamo i file:

- **environment.prod.ts** è l'ambiente di produzione, qua dentro andremo a mettere delle variabili, sono delle variabili che cambieranno in base all'ambiente, quando saremo in fase di deploy Angular è in grado di capire se siamo in produzione o in test.
- **environment.ts** è l'ambiente di sviluppo.
- La **favicon.ico** non ha bisogno di presentazioni.
- **index.html** da cui parte tutto.
- **main.ts** è il file da cui parte tutta l'applicazione Angular. Noi mandiamo a schermo index.html ma è da qui che parte tutto. Da notare tra le linee di codice l'enviroment e l'AppModule.
- **polyfills.ts** è per il supporto dei vari browser.
- **styles.scss (o css)** è lo stile globale dell'app.
- **test.ts** serve per il test (non lo useremo in questo corso).

### LANCIARE L'APP IN LOCALE

Per lanciare l'applicazione in locale scrivere nel terminale:

**ng serve**

Possiamo usare anche il comando:

**npm start**

Tutto quello che appare nella home si trova in app.component.html

## Componenti - LEZIONE 3

Il loro punto di forza è che si possono riutilizzare e personalizzare nelle varie parti dell'app.

In app abbiamo il primo componente, il fatto che si chiami app.component è perché viene creato da Angular in modo predefinito.

Noi abbiamo tre file ma potremmo averli tutti in app.component.ts, invece preferiamo dividere il codice in 3 file (invece di mettere l'indirizzo del file andrebbe inserito direttamente il codice nei relativi spazi).

Analizziamo il componente che Angular ha creato di default, nello specifico il file **app.component.ts**:

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

**ng g c prova**

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

Puliamo il file **app.component.html** e inseriamo semplicemente il selettore:

```html
<app-prova></app-prova>
```

Comparirà l'HTML presente nel nostro componente, Angular riconosce in automatico il selettore. Questo perché il componente è nelle declaration presente nel file .ts del componente di default. Posso anche duplicare il componente all'interno della stessa pagina.

## Angular Material Design - LEZIONE 4

Angular Material Design è un **framework CSS** creato da Google in formato specifico per Angular.

Il link del progetto è https://material.angular.io/

Apriamo la documentazione di Angular Material: https://material.angular.io/guide/getting-started

Installiamo con il comando:

**ng add @angular/material**

Proviamo a mostrare un componente, c'è la relativa sezione "Display a component" nella documentazione.

Come scritto nelle istruzioni dobbiamo fare l'import su **app.module.ts**.

Copiamo ed incolliamo il tag dello slider nel nostro componente di prova. Potrebbe non vedersi niente perché dobbiamo riavviare il server.

Quando andiamo su un componente in particolare alla voce API troviamo la riga di codice per importare il componente.

Su example abbiamo sia la preview del componente sia la possibilità di copiare il codice in tutte le sue parti, quindi html, css e Typescript.

Potremmo avere un problema sui bottoni se non importiamo l'API dei bottoni, questo perché alcuni componenti sono composti da altri componenti.

Esiste su StackOverflow qualcuno che ha creato un modulo a parte per Angular Material così da non dover ogni volta importare manualmente il codice nel nostro modulo, ciò però richiede soluzioni più avanzate per aggirare i possibili problemi che potrebbero derivare da ciò.

## Ciclo di vita dei componenti - LEZIONE 5

Sulla nostra single page application quando cambiamo pagina cambia il contenuto, quindi abbiamo dei componenti che vengono creati e distrutti continuamente.

Schema di un ciclo di vita di un componente:

![alt text](/src/assets/img/component_lifecycle.png)

**ngOnInit()** l'avevamo già incontrato, ed era stato creato automaticamente da Angular non appena abbiamo creato il componente prova.

Non appena viene inizializzato il componente fa un controllo **ngDoCheck()**.

Poniamo il caso non ci sia niente in questo controllo si passa a **ngAfterContentInit()**, il content non è altro che il testo, tutto ciò che è all'interno dei tag html.

Dopo che viene inizializzato il conenuto viene controllato, **ngAfterContentChecked()**.

Dopodiché viene inizializzata la view con **ngAfterInit()**, la view è la parte visibile del componente, ovvero il risultato finale.

La view viene anch'essa controllata, **ngAfterViewChecked()**, ed il componente rimane visibile sullo schermo fino a che noi non lo distruggiamo **ngOnDestroy()**.

I metodi in rosso vengono chiamati una volta sola, ovvero quando il componente viene creato, quelli in verde vengono chiamati ogni volta che succede qualcosa.

**ngOnChanges()** vuol dire che il nostro componente è sempre in ascolto e che possiamo interagirci. Il componente può mutare e quindi va effettuato un controllo su di esso, **ngDoCheck()**, va fatto un check sul contenuto per vedere se è cambiato qualcosa, **ngAfterContentChecked()** ed infine il check sulla view, **ngAfterViewChecked()**.

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

Viene in nostro aiuto il **databinding**, che vuole dire legare i dati.

La parte logica prende il nome di **model**, ed è quella nel file Typescript del componente, mentre la **view** è la parte grafica e si trova nel file html. Quindi il databinding consiste nel collegare i dati presenti nella parte logica a ciò che l'utente vede a schermo, ma anche viceversa, perché possiamo collegare i componenti che leghiamo a schermo con ciò che succede dietro.

Il databinding si scompone in due categorie:

- **one-way (una direzione)**: portiamo i dati dalla logica al componente view, oppure dal componente alla logica.
- **two-way (doppia direzione)**: i dati vengono passati da ambo le parti in contemporanea.

Tipi di data binding (li vedremo in dettaglio nelle prossime lezioni):

- **String interpolation (interpolazione delle stringhe)**: serve per mandare a schermo dei dati, per esempio potremmo cambiare il nome del cane facendo comparire il valore stringa di una variabile.
- **Property binding**: non è con i dati che mostriamo a schermo ma con le proprietà degli elementi html, per esempio potremmo mostrare una classe css in base a un tipo di dato.
- **Event binding**: al contrario dei due precedenti questo tipo di databinding lega gli eventi che compaiono nella view e li mandiamo a typescript, per esempio quando clicco sui vari bottoni deve accadere qualcosa.
- **Two-way binding**: un esempio di questo tipo di databinding è il form, in cui prendiamo dei dati da typescript ma se succede qualcosa li andiamo a cambiare. Per esempio un input che manda il nome del cane nella card modificando il valore di una proprietà.

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

Facciamo un esempio inserendo un bottone nell'html del componente (prendiamolo da Angular Material).

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

Una volta digitato ciò ci darà errore, questo perché dobbiamo importare in app.module.ts il modulo di Angular **FormsModule**.

**ngModel** è una direttiva, argomento che affronteremo nelle prossime lezioni. Questa direttiva dice di connettere ngModel sia in entrata come evento sull'input (cioè quando utilizzo il mio input è un evento), ma quando arriva qualcosa da TypeScript è property binding.

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

Le **direttive sono classi**, servono per essere messe sugli elementi html, per andare a cambiare il comportamento di essi.

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

**ATTENZIONE** ngIf non fa un display none ma va a creare o meno l'elemento in base alla condizione.

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

## Passare dati da un componente Parent a un Child - LEZIONE 17

Per componente Child si intende un componente contenuto all'interno di un altro componente.

Nel nostro esempio, in app.component.html abbiamo il componente app-prova, noi vogliamo passargli i dati di app.component.ts.

**app.component.ts**

```ts
persone = [
  { nome: "Luca", cognome: "Rossi", isOnline: true, color: "blue" },
  { nome: "Marco", cognome: "Verdi", isOnline: false, color: "red" },
  { nome: "Anna", cognome: "Pannocchia", isOnline: false, color: "yellow" },
  { nome: "Leonardo", cognome: "Sciascia", isOnline: true, color: "green" },
  { nome: "Maccio", cognome: "Capatonda", isOnline: false, color: "purple" },
];
```

**app.component.html**

```html
<!-- Per passare la variabile persone in app.component.ts
a prova.component dobbiamo usare il property binding -->
<app-prova [data]="persone"></app-prova>
```

**prova.component.ts**

```ts
// Quando si scrive, dovrebbe essere importato automaticamente
// da Angular. La variabile data quindi ha un decoratore chiamato
// Input, perché il suo valore arriva dall'esterno.
@Input() data: any;

ngOnInit(): void {
    console.log('Dati passati da app.component:', this.data);
  }
```

**prova.component.html**

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

**app.component.ts**

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

**app.component.html**

```html
<button (click)="onClickChangePersone()">Cambio Persone</button>
```

Cliccando sul bottone vengono cambiati i valori delle proprietà in persone e questi cambiamenti si riflettono anche su data, così facendo prova.component manda a schermo i nuovi valori.

Come facciamo a "prendere" i vari cambiamenti? Con onChanges:

**prova.component.ts**

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

## Passare dati da un componente Child al Parent - LEZIONE 18

**prova.component.ts**

```ts
  // Proviamo a "buttare fuori" questa variabile al fine di
  // poterla utilizzare dentro app.component che è il componente
  // Parent
  nome = "Luca";

  // Con "Output" facciamo uscire un evento chiamato "mandaDatiEvento"
  // che è un "EventEmitter"
  @Output() mandaDatiEvento = new EventEmitter<string>();

  mandaDati() {
    this.mandaDatiEvento.emit(this.nome);
  }
```

**prova.component.html**

```html
<button (click)="mandaDati()">Manda dati al parente</button>
```

**app.component.html**

```html
<!-- Per permettere ad app.component di prendere dati dal
componente child dobbiamo usare l'event binding,
useremo però un evento custom, il quale mette in ascolto il
componente app.component per l'evento "mandaDatiFuori" -->
<app-prova
  [data]="persone"
  (mandaDatiEvento)="onRiceviDati($event)"
></app-prova>
```

**app.component.ts**

```ts
  onRiceviDati(value: string) {
    console.log(value);
  }
```

Ricapitolando per passare i dati da Parent a Child si usa il property binding, mentre da Child a Parent si usa l'event binding.

Oltre questo sistema esiste un modo più approprieto per farlo su larga scala quando i componenti sono molti e complessi, lo vedremo nelle prossime lezioni.

## Le variabili Template - LEZIONE 19

Abbiamo visto le variabili template nella lezione 12, oggi vediamo come possiamo prendere la variabile template, quindi il riferimento all'elemento HTML, in typescript, questo è un metodo che si usa per puntare al form.

Abbiamo già visto come collegare direttamente un input a una variabile in TypeScript, ora vediamo come poter pescare i valori di input sul click, senza dover collegare per forza una variabile.

**app.component.html**

```html
<!-- #inputSaluti è una variabile di template -->
<input #inputSaluti value="ciao" />
```

Per prendere la variabile di template nel file html dobbiamo utilizzare un decoratore:

**app.component.ts**

```ts
// È un decoratore che ci dice che c'è un figlio della view,
// che si chiama inputSaluti, aggiungendo il punto esclamativo
// assicuriamo TypeScript sul fatto che il valore non sarà
// mai null o undefined
  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  // Ci restituirà undefined, perché a ngOnInit il componente viene
  // inizializzato, non c'è ancora niente
  ngOnInit(): void {
    console.log('ngOnInit inputSaluti:', this.inputSaluti);
  }

  // ngAfterViewInit il console.log ci darà il nostro riferimento all'elemeto
  // questo è il modo corretto per accedere al ViewChild
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit inputSaluti:', this.inputSaluti);
  }
```

Con questo sistema, parlando di un ipotetico form, usando ViewChild, invece di creare una variabile per ogni campo di input ne creiamo una sola che prenda tutto il form.

Creiamo un bottone e il relativo evento:

**app.component.html**

```html
<input #inputSaluti value="ciao" />
<button (click)="onClickView()">Invia</button>
```

**app.component.ts**

```ts
  onClickView() {
    console.log('onClickView inputSaluti:', this.inputSaluti);
  };
```

Anche in questo caso il console.log stamperà ElementRef, il quale è un riferimento dell'elemento, che porta con se un nativeElement, aprendolo vedremo una serie di dati, quello che interessa a noi è value.

Per prendere sto valore dobbiamo quindi fare:

```ts
 onClickView() {
    console.log('onClickView inputSaluti:', this.inputSaluti.nativeElement.value);
  };
```

## Creare delle direttive - LEZIONE 20

Creiamo una nuova direttiva col comando:

**ng g d highlight**

La direttiva creata servirà per evidenziare un elemento quando ci passeremo sopra col mouse. È qualcosa che posso anche fare col CSS ma essendo in Angular questa direttiva mi permette di cambiare dinamicamente i colori, cosa che solo col CSS non posso fare. Possiamo anche far comparire altri componenti e così via.

Vengono generati due file, li raccogliamo in una cartella app -> direttive -> highlight (quando spostiamo i file assicuriamoci di aggiornare app.module).

Da notare che in app.module le direttive sono sullo stesso piano dei componenti.

La direttiva sembra un normale componente, gli manca solo il template e lo style. Cambia il tipo di selettore, presenta delle parentesi quadrate. Cambia il decoratore, che specifica che è una direttiva.

**highlight.directive.ts**

```ts
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  // Vogliamo associare la direttiva a un elemento,
  // dobbiamo prendere il riferimento dell'elemento
  constructor(private element: ElementRef) {
    // Vogliamo cambiare il colore di background dell'elemento
    this.element.nativeElement.style.backgroundColor = "yellow";
  }
}
```

**app.component.html**

```html
<!-- Inseriamo il selettore della
direttiva di highlight.directive.ts -->
<p appHighlight>Paragrafo creazione direttiva</p>
```

Avendo applicato la direttiva, automanticamente viene applicato lo stile sull'elemento. La nostra direttiva essendo applicata sull'elemento ha accesso ad esso.

Ancora però rimane da gestire il passaggio del mouse, possiamo farlo con una cosa che si chiama **host listener**, per fare ciò dobbiamo creare dei metodi:

**highlight.directive.ts**

```ts
  // Passiamo il cambio di stile al decoratore HostListener
  // In questo modo gestiamo degli eventi "mouseenter" e "mouseleave"
  @HostListener("mouseenter") onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener("mouseleave") onMouseLeace() {
    this.element.nativeElement.style.backgroundColor = 'transparent';
  }
```

In questo modo otterremo l'effetto desiderato, ma possiamo ottimizzarlo in vista dei prossimi step:

**highlight.directive.ts**

```ts
  @HostListener("mouseenter") onMouseEnter() {
    this.cambiaColore('red');
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.cambiaColore("blue");
  }

  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
```

Abbiamo creato la nostra prima e semplice direttiva.

Adesso vediamo come passare dati alla direttiva per poterla customizzare.

Per passare dei dati da fuori a dentro abbiamo bisogno di @Input.

**highlight.directive.ts**

```ts
@Input() coloreHighlight = "";
```

Noi vogliamo poter passare il valore dal componente parente, ovvero app.component. Per fare ciò ci basta il property binding e gli assegniamo una variabile:

**app.component.html**

```html
<!-- Inseriamo il selettore della
direttiva di highlight.directive.ts -->
<!-- Facciamo il property binding e gli assegniamo una variabile -->
<!-- La variabile colore è quella che creiamo in questa fase in
app.component -->
<!-- A questo punto il selettore ci darà errore, questo perché
al decoratore @Input avevamo assegnato coloreHighlight come
proprietà, invece andava usato lo stesso nome del selettore, ovvero
appHighlight, perché il selettore è esso stesso anche una proprietà -->
<p [appHighlight]="colore">Paragrafo creazione direttiva</p>
```

**highlight.directive.ts**

```ts
@Input() appHighlight = "";
```

**app.component.ts**

```ts
colore = "purple";
```

Andiamo a settare i listener di eventi dicendo che il colore sia quello dato da @Input:

**highlight.directive.ts**

```ts
  @HostListener('mouseenter') onMouseEnter() {
    // this.cambiaColore('red');
    this.cambiaColore(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.cambiaColore('blue');
    this.cambiaColore('transparent');
  }
```

Adesso il background cambierà in purple, ma questo purple verrà da app.component, quindi adesso possiamo cambiare il colore dal componente parente, vediamo come possiamo cambiare il colore selezionandolo tra varie scelte:

**app.component.html**

```html
<h2>Scegli il colore dell'evidenziatore</h2>
<div>
  <!-- Se abbiamo 3 bottoni ma facciamo riferimento a un solo
  valore il nome deve essere unico -->
  <input
    type="radio"
    name="coloreEvidenziatore"
    (click)="cambiaColoreEvidenziatore('red')"
  />Rosso
  <input
    type="radio"
    name="coloreEvidenziatore"
    (click)="cambiaColoreEvidenziatore('pink')"
  />Rosa
  <input
    type="radio"
    name="coloreEvidenziatore"
    (click)="cambiaColoreEvidenziatore('purple')"
  />Viola
</div>
```

**app.component.ts**

```ts
  cambiaColoreEvidenziatore(colore: string) {
    this.colore = colore;
  }
```

Adesso proviamo ad aggiungere un valore di default. Potremmo non voler impostare un valore di default da app.component.ts ma direttamente dall'elemento html.

Come possiamo farlo? Sappiamo che è un altro @Input, quindi:

**highlight.directive.ts**

```ts
@Input() defaultColor = '';

@HostListener('mouseenter') onMouseEnter() {
    // Questo operatore || ci dice che se c'è un valore associato allora
    // lo usa, oppure usa this.defaultColor oppure se
    // non c'è manco questo usa "orange"
    this.cambiaColore(this.appHighlight || this.defaultColor || "orange") ;
  }
```

**app.component.ts**

```ts
colore = "";
```

**app.component.html**

```html
<p [appHighlight]="colore" defaultColor="blue">Paragrafo creazione direttiva</p>
```

## Funzioni Pipe - LEZIONE 21

Le pipe sono delle funzioni che possiamo utilizzare all'interno delle espressioni stringa, di base quando andiamo a fare string interpolation.

**app.component.html**

```html
<!-- Usiamo la string interpolation, la stanghett è una pipe e vuol dire
che adesso possiamo inserire delle funzioni pipe, alcune non necessitano
di parametri che possiamo aggiungere, ad esempio "uppercase" -->
<p>Ciao benvenuti al {{ title | uppercase }}</p>
```

Nell'esempio ci siamo risparmiati l'uso del CSS, ma possiamo fare anche roba più complicata che il CSS non ci permetterebbe, come l'introduzione della currency.

Le pipe si utilizzano anche per le traduzioni.

Possiamo anche costruirci le nostre pipe ma in questo corso non ci interessa e comunque le più utili sono già presenti di default.

Oltre ad **uppercase** ed ovviamente a **lowercase** abbiamo altre pipe.

Andiamo a vedere la **datepipe**, che ci permette di formattare la data in diversi modi.

**app.component.ts**

```ts
oggi = Date.now();
```

**app.component.html**

```html
<!--Andiamo a prendere la proprietà "oggi" che contiene Date.Now(), riporterà
un valore che indica quanti secondi sono passati dal 1970, il che è illegibile,
per formattare questo valore invece di creare una funzione apposita in .ts usiamo
la pipe -->
<!-- In questo modo mostra mese, giorno e anno -->
<p>{{ oggi | date }}</p>
<!-- In questo modo avremo anche l'orario -->
<p>{{ oggi | date:"medium" }}</p>
<!-- In questo modo avremo solo l'ora -->
<p>{{ oggi | date:"shortTime" }}</p>
<!-- Possiamo anche formattarlo direttamente con minuti e secondi -->
<p>{{ oggi | date:"mm:ss" }}</p>
<!-- Proviamo ad aggiungere anche le ore alla precedente pipe -->
<p>{{ oggi | date:"h:mm:ss" }}</p>
<!-- Una versione completa ed utile può essere la seguente,
impostando MMM appare il mese testuale -->
<p>{{ oggi | date:"dd/mm/yyyy - h:mm:ss" }}</p>
```

Questi sono solo alcuni esempi, nella documentazione ci sono anche altri casi indicati.

Andiamo avanti, vediamo **decimalpipe** e **percentagepipe**.

Come potreste immaginare la decimalpipe ci permette di mettere i decimali:

**app.component.ts**

```ts
numeroPipeLesson = 5.3435435643;
```

**app.component.html**

```html
<!-- Vediamo la decimalpipe, gli stiamo dicendo di riportare minimo due
numeri interi e dopo la virgola, di riportare minimo 2 decimali e massimo
4 decimali -->
<p>{{ numeroPipeLesson | number: '2.2-4' }}</p>
```

Per la percentagepipe:

**app.component.html**

```html
<!-- Per la percentuale funziona allo stesso modo -->
<p>{{ numeroPipeLesson | percent: '2.2-4' }}</p>
```

La **currencypipe** è un argomento interessante:

**app.component.html**

```html
<!-- La currencypipe senza aggiungere niente di default ci
riporterà il numero espresso in dollari -->
<p>{{ numeroPipeLesson | currency }}</p>

<!-- Se vogliamo gli euro dobbiamo fare un'aggiunta -->
<p>{{ numeroPipeLesson | currency: "EUR" }}</p>

<!-- Se invece vogliamo la scritta "EUR" bisogna fare così -->
<p>{{ numeroPipeLesson | currency: "EUR":"code" }}</p>

<!-- Possiamo specificare l'uso del symbol e specificare anche qui
quanti numeri e quanti decimali riportare -->
<p>{{ numeroPipeLesson | currency: "EUR":"symbol":"2.1-5" }}</p>
```

Esiste anche una currency pipe **locale** che prende tutte le impostazioni locali dell'utente e setta la currency in base ad esse.

La documentazione sulle pipe si trova al seguente link: https://angular.io/guide/pipes

## Cosa sono i service - LEZIONE 22

I service possono comunicare con qualsiasi componente in modo trasversale. Inoltre i componenti devono limitarsi a mostrare a schermo roba, quindi i componenti a certi livelli di programmazione, non devono avere logica all'interno, essa deve essere delegata ai service.

In realtà ci deve essere un minimo di interazione e di logica nei componenti, ma i dati vanno presi dal service. Il componente deve limitarsi a gestire la parte visiva.

Utilizziamo un nuovo comando nel terminale:

**ng g s servizio-prova**

Il file che viene a crearsi si presenta così:

**servizio-prova.service.ts**

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ServizioProvaService {
  constructor() {}
}
```

L'unico import presente ci suggerisce che possiamo "iniettare" il nostro service in tutta l'applicazione o solo in alcune parti di essa.

All'interno del decoratore @Injectable vi è la proprietà "proviceIn: 'root'", indica dove viene messo a disposizione il service, in questo caso nella root. Vuol dire che qualsiasi componente può chiamarlo.

Modificando provideIn rendiamo disponibile il service solo in certi componenti.

Se andiamo su app.module.ts notiamo che la parola "providers" è molto simile alla parola "provideIn", infatti noi potremmo avere i service scritti in "providers", però nel nostro caso, indicando root in provideIn è come inserire il service tra i providers in app.module.

C'è da considerare che noi possiamo dividere l'applicazione in altri moduli e decidere in quali di essi indicare il service.

Nel nostro caso metteremo il service a disposizione di tutta l'applicazione.

In genere nelle applicazioni ci sono più service, per esempio c'è un service che gestisce i login, un altro prende i dati delle fatture ecc...

Riprendiamo l'array di oggetti persone che avevamo già visto nelle prime lezioni e chiamiamolo in modo leggermente diverso:

**servizio-prova.service.ts**

```ts
export class ServizioProvaService {
  personeServiceLesson = [
    { nome: "Luca", cognome: "Rossi", isOnline: true, color: "blue" },
    { nome: "Marco", cognome: "Verdi", isOnline: false, color: "red" },
    { nome: "Anna", cognome: "Pannocchia", isOnline: false, color: "yellow" },
    { nome: "Leonardo", cognome: "Sciascia", isOnline: true, color: "green" },
    { nome: "Maccio", cognome: "Capatonda", isOnline: false, color: "purple" },
  ];
}
```

Vediamo come facciamo ad accedere ai dati al suo interno in modo "brutale", proviamo ad accedere da prova.component:

**prova.component.ts**

```ts
  // Inniettiamo il service a prova.component inserendolo nel costruttore
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
  console.log('Dati dal service', this.servizioProva.personeServiceLesson);
  }
```

Se andiamo sulla console vedremo l'array del service. Possiamo farte la stessa cosa su app.component e avremo gli stessi dati che sono stati messi a disposizione per prova.component.

Tutto lo sbatti di prima che avevamo fatto prima da componente a componente viene completamente saltato con i service.

Quindi se in un'applicazione dobbiamo condividere dati tra più componenti, anziché salvarli in un componente e farli "scendere" possiamo metterli in comune con un service.

Dai service ovviamente possiamo richiamare anche metodi non solo dati.

**prova.component.ts**

```ts
personaService = this.servizioProva.personeServiceLesson[0].nome;
```

**prova.component.html**

```html
<p>Prova Lezione Service: {{ personaService }}</p>
```

Con questo codice ho fatto lo string interpolation di una proprietà che prende il valore direttamente dal service.

## Cambiare pagina con il Routing - LEZIONE 23

Cos'è il routing? È di base l'instradamento, ovvero la capaicità che abbiamo in Angular di spostarci da una pagina all'altra (o da un componente all'altro).

Se non abbiamo installato il routing al momento di creazione dell'app Angular possiamo generarlo noi stessi con:

**ng g module app-routing --flat --module=app**

Abbiamo usato **--flat**, perché non vogliamo che crei la sua cartella adhoc di routing.

Abbiamo usato anche **--module=app** perché va specificato in che modulo va inserito, perché è un modulo a se stante ma deve fare riferimento ad app.module.

Diamo un'occhiata a questo file:

**app-routing.module.ts**

```ts
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

Per prima cosa creiamo una cartella chiamata "componenti" e generiamo dei nuovi componenti da linea di comando:

**ng g c componenti/about**

Ora vedremo in modo grezzo come passare da un componente all'altro.

Il modulo app-routing.module.ts ha un NgModule (come app.module), in cui gestisce tutta la parte di routing. Nella variabile "routes" inseriremo le pagine (che sarebbero i componenti) della nostra app:

**app-routing.module.ts**

```ts
const routes: Routes = [{ path: "", component: HomeComponent }];
```

Se andiamo a controllare avviando l'app però notiamo che ancora vediamo la pagina di app.component e non il componente indicato in routes. Questo perché non abbiamo definito l'area di lavoro:

**app.component.html**

```html
<router-outlet></router-outlet>
```

Inserendo router-outlet vedremo a schermo il componente HomeComponent.

**app-routing.module.ts**

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];
```

Così facendo se digitiamo il nome dei componenti nell'url dovremmo vedere apparire il loro contenuto (ad esempio http://localhost:4200/about).

Con questo sistema siamo in grado di passare da un componente a un altro.

Proviamo a creare un menu rudimentale:

**app.component.html**

```html
<!--Menu per passare da una pagina all'altra con il
routing, non possiamo usare href, quindi useremo
l'attributo routerLink -->
<a routerLink="/">Home</a>
<a routerLink="about">About</a>
<a routerLink="contact">Contact</a>

<router-outlet></router-outlet>
```

## Routing con parametri - LEZIONE 24

Routing con parametri, per fare un esempio concreto, nel nostro componente contact inseriremo vari contatti, creando su ognuno di essi si andrà a un url specifico che manterrà la sua struttura eccetto per il parametro alla fine di esso, per esempio nell'url "http://localhost:4200/contatti/pippocontact", "pippocontact" è il parametro.

Creiamo il componente contatti:

**ng g c componenti/contatti**

**app.component.html**

```html
<a routerLink="/" style="margin-right: 10px;">Home</a>
<a routerLink="contatti" style="margin-right: 10px;">Contatti</a>

<router-outlet></router-outlet>
```

**app-routing.module.ts**

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "contatti", component: ContattiComponent },
];
```

Adesso cominciamo a passare dei dati, andiamo al nostro service.

**servizio-prova.service.ts**

```ts
  getPersone() {
    return this.personeServiceLesson;
  }
```

**contatti.component.ts**

```ts
  // Se dovesse dare problemi andare su tsconfig.json
  // e aggiungere questa riga a compilerOptions:
  // "strictPropertyInitialization": false
  persone: any;

  // Prendiamo i dati dal service
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
  }
```

**contatti.component.html**

```html
<p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

<div *ngFor="let persona of persone">
  <p>{{ persona.nome }} {{ persona.cognome }}</p>
</div>
```

A questo punto dovrebbe restituirsci a schermo tutta la nostra contatti, adesso vorrei poter andare sul primo contatto scrivendo il parametro 0 nell'url, ad esempio "http://localhost:4200/contatti/0".

**app-routing.module.ts**

```ts
const routes: Routes = [
  { path: "contatti", component: ContattiComponent },
  // "/:id" serve a indicare il parametro
  { path: "contatti/:id", component: ContattiComponent },
];
```

Adesso Angular è in grado di gestire il parametro, quello che però dobbiamo fare è riuscire a prenderlo, per poterlo fare dobbiamo andare nel componente e lavorare con le route, ma soprattutto con activated route, quindi la route attiva la strada che sarà "contatti/:id". Peciò dobbiamo:

**contatti.component.ts**

```ts
  // Il primo parametro prende i dati dal service
  // Il secondo parametro attiva la route
  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();
    // Con snapshot è come se avesse fatto uno screen del route attuale
    // paraMap è la mappa di tutti i parametri
    // in get indichiamo il nome del parametro
    this.route.snapshot.paramMap.get('id')
  }
```

In questo modo se mettessimo this.route.snapshot.paramMap.get('id') in un console.log vedremmo che riusciamo a catturare qualsiasi cosa digitata come paraemtro nell'url.

Adesso vogliamo mostrare qualcosa di diverso in base al parametro, quindi se il parametro è null dovrà mandarci a schermo l'intera lista contatti, se invece no vuol dire che vogliamo vedere il profilo del contatto. Dobbiamo quindi fare:

**contatti.component.ts**

```ts
  isProfile: boolean = false;

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersone();

    // Se non restituisce un numero darà false, altrimenti true.
    this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;

    // Con snapshot è come se avesse fatto uno screen del route attuale
    // paraMap è la mappa di tutti i parametri
    // in get indichiamo il nome del parametro
    console.log(this.route.snapshot.paramMap.get('id'));

    console.log(this.isProfile);
  }
```

Nota: possiamo vedere come abbiamo delle variabili all'interno dei componenti, e queste variabili le possiamo passare a un sottocomponente. Quindi non tutte le variabili vengono gestite dai service.

Ora vogliamo che la lista contatti compaia se isProfile è false:

**contatti.component.html**

```html
<div *ngIf="!isProfile; else profiloContatto">
  <p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

  <div *ngFor="let persona of persone">
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </div>
</div>

<ng-template #profiloContatto>
  <p>Profilo di Default</p>
</ng-template>
```

A questo punto dobbiamo riuscire a prendere il profilo che ci interessa:

**contatti.component.ts**

```ts
persone: any;
persona: any;

ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();

    // Se non restituisce un numero darà false, altrimenti true.
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;

    // Commentiamo il precedente codice e facciamo un if
    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        // Col punto esclamativo "assicuriamo" Typescript
        // che non arrivi null ma un numero, ovvero l'id
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    } else {
      this.isProfile = false;
      // Se non abbiamo l'id vogliamo avere tutta la lista delle persone
      this.persone = this.servizioProva.getPersone();
    }

    // Con snapshot è come se avesse fatto uno screen del route attuale
    // paraMap è la mappa di tutti i parametri
    // in get indichiamo il nome del parametro
    console.log(this.route.snapshot.paramMap.get('id'));

    console.log(this.isProfile);
  }
```

**contatti.component.html**

```html
<div *ngIf="!isProfile; else profiloContatto">
  <p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

  <div *ngFor="let persona of persone">
    <p>{{ persona.nome }} {{ persona.cognome }}</p>
  </div>
</div>

<ng-template #profiloContatto>
  <p>Profilo di {{ persona.nome }} {{ persona.cognome }}</p>
</ng-template>
```

Adesso vogliamo che i singoli contatti siano cliccabili, così da non dover più inserire manualmente il parametro nell'url:

**contatti.component.html**

```html
<div *ngIf="!isProfile; else profiloContatto">
  <p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

  <div *ngFor="let persona of persone; index as i">
    <!-- Usiamo il tag a in un modo diverso, esiste un altro
    modo per ottenere lo stesso risultato, che usa un array,
    ma lo vedremo successivamente -->
    <a routerLink="/contatti/{{ i }}"
      ><p>{{ persona.nome }} {{ persona.cognome }}</p></a
    >
  </div>
</div>

<ng-template #profiloContatto>
  <p>Profilo di {{ persona.nome }} {{ persona.cognome }}</p>
</ng-template>
```

## Routing children per caricare sottocomponenti - LEZIONE 25

Quest volta, quando si clicca su un contatto, vogliamo che si apra a lato pagina il profilo effettivo, così da non dover uscire dalla pagina.

Tutto si andrà a svolgere dentro contatti ma caricheremo un altro componente che è il singolo contatto (o pagina del profilo).

Creiamo il componente contatto singolo:

**ng g c componenti/contatto**

Iniziamo a inserire il sottocomponente:

**contatti.component.html**

```html
<div *ngIf="!isProfile; else profiloContatto">
  <p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

  <div *ngFor="let persona of persone; index as i">
    <!-- Usiamo il tag a in un modo diverso, esiste un altro
    modo per ottenere lo stesso risultato, che usa un array,
    ma lo vedremo successivamente -->
    <a routerLink="/contatti/{{ i }}"
      ><p>{{ persona.nome }} {{ persona.cognome }}</p></a
    >
  </div>
</div>

<ng-template #profiloContatto>
  <!-- <p>Profilo di {{ persona.nome }} {{ persona.cognome }}</p> -->
  <app-contatto></app-contatto>
</ng-template>
```

**contatto.component.html**

```html
<p>Profilo di Nome e Cognome</p>
<p>Colore preferito: blug</p>
```

Siamo andati a inserire in contatti il sottocomponente, quindi abbiamo il figlio di un figlio.

Vediamo come:

**contatti.component.html**

```html
<ng-template #profiloContatto>
  <!-- Passiamo al componente figlio i dati contenuti in
  contatti.component.ts, ovvero nel componente padre -->
  <app-contatto [persona]="persona"></app-contatto>
</ng-template>
```

**contatto.component.ts**

```ts
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-contatto",
  templateUrl: "./contatto.component.html",
  styleUrls: ["./contatto.component.scss"],
})
export class ContattoComponent implements OnInit {
  // Siccome stiamo importando dal componente genitore
  // contatti.component.ts il valore di persona si usa
  // il decoratore @Input
  @Input() persona: any;

  constructor() {}

  ngOnInit(): void {}
}
```

**contatto.component.html**

```html
<p>Profilo di {{ persona.nome }} {{ persona.cognome }}</p>
<p>Colore preferito: {{ persona.color }}</p>
```

Tutto funziona, ma noi non vogliamo continuare a cambiare pagina, vogliamo avere i profili a lato rispetto alla lista.

**app-routing.module.ts**

```ts
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  // children è un array di altri path
  {
    path: "contatti",
    component: ContattiComponent,
    children: [{ path: ":id", component: ContattoComponent }],
  },
  // "/:id" serve a indicare il parametro
  // { path: 'contatti/:id', component: ContattiComponent },
];
```

Questa parte cambia rispetto a prima nel seguente modo:

**contatti.component.html**

```html
<!-- <div *ngIf="!isProfile"> -->
<p style="text-transform: uppercase; margin-top: 20px">Lista contatti</p>

<div *ngFor="let persona of persone; index as i">
  <!-- Usiamo il tag a in un modo diverso, esiste un altro
    modo per ottenere lo stesso risultato, che usa un array,
    ma lo vedremo successivamente -->
  <a routerLink="/contatti/{{ i }}"
    ><p>{{ persona.nome }} {{ persona.cognome }}</p></a
  >
</div>
<!-- </div> -->

<!-- Si usa ogni volta che all'interno di un componente
volete caricare un altro componente in modo dinamico , lo
si usa anche quando si hanno dei router child come nel nostro caso -->
<router-outlet></router-outlet>

<!-- <ng-template #profiloContatto> -->
<!-- <p>Profilo di {{ persona.nome }} {{ persona.cognome }}</p> -->
<!-- Passiamo al componente figlio i dati contenuti in
  contatti.component.ts, ovvero nel componente padre -->
<!-- <app-contatto [persona]="persona"></app-contatto>
</ng-template> -->
```

Avendo tolto il selettore app-contatto ci darà problemi. Andiamo a modificare anche la logica di contatti.component (questo perché abbiamo collegato l'id a un altro componente):

**contatti.component.ts**

```ts
export class ContattiComponent implements OnInit {
  // Se dovesse dare problemi andare su tsconfig.json
  // e aggiungere questa riga a compilerOptions:
  // "strictPropertyInitialization": false
  persone: any;
  persona: any;
  // isProfile: boolean = false;

  // Il primo parametro prende i dati dal service
  // Il secondo parametro attiva la route
  constructor(
    private servizioProva: ServizioProvaService // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.persone = this.servizioProva.getPersone();

    // Se non restituisce un numero darà false, altrimenti true
    // this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true;

    // Questo ci interessa per prendere tutte le persone
    this.persone = this.servizioProva.getPersone();

    // Commentiamo il precedente codice e facciamo un if

    // else {
    // this.isProfile = false;
    // Se non abbiamo l'id vogliamo avere tutta la lista delle persone
    // this.persone = this.servizioProva.getPersone();
    // }

    // Con snapshot è come se avesse fatto uno screen del route attuale
    // paraMap è la mappa di tutti i parametri
    // in get indichiamo il nome del parametro
    // console.log(this.route.snapshot.paramMap.get('id'));

    // console.log(this.isProfile);
  }
}
```

**contatto.component.ts**

```ts
export class ContattoComponent implements OnInit {
  persona: any;
  // Siccome stiamo importando dal componente genitore
  // contatti.component.ts il valore di persona si usa
  // il decoratore @Input
  // @Input() persona: any;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      // this.isProfile = true;
      this.persona = this.servizioProva.getPersona(
        // Col punto esclamativo "assicuriamo" Typescript
        // che non arrivi null ma un numero, ovvero l'id
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    }
  }
}
```

Se andiamo a premere il singolo contatto apparirà sotto l'elenco dei contatti. Quindi non cambierà pagina, tuttavia se continuo a cliccare sugli altri nomi non aggiorna il componente, questo perché non riesce a capire il cambiamento del parametro.

Quindi dobbiamo riuscire a dire al componente contatto.component di aggiornarsi a ogni cambio di parametro.

Per fare ciò dobbiamo effettuare il **subscribe**, questo serve a far stare ContattoComponent attento ai cambiamenti, per fare ciò:

**contatto.component.ts**

```ts
export class ContattoComponent implements OnInit {
  id!: number;
  persona: any;
  // Siccome stiamo importando dal componente genitore
  // contatti.component.ts il valore di persona si usa
  // il decoratore @Input
  // @Input() persona: any;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Mettendo un + lo convertiamo in numero, è la stessa cosa di fare pareseInt
    // Ho messo il ! per evitare il controllo del null, se vogliamo evitare
    // questo tipo di controllo in TypeScript possiamo andiare in tsconfig.json
    // ed inserire in "compilerOptions" la voce "strictNullChecks"
    // this.id = +this.route.snapshot.paramMap.get('id')!;

    // Sottoscrivendoci non abbiamo più bisogno dello snapshot
    // Con subscribe sottoscriviamo un abbonamento alla mappa di
    // parametri del route, quando cambia non essendo più su un altro 
    // route ma un un child route dobbiamo iscriverci, lo snapshot non
    // basta più
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona = this.servizioProva.getPersona(this.id);
    })

  }
}
```

Una volta fatto ciò aggiornerà il componente dei singoli contatti a ogni click su ognuno di essi.

Per mettere lateralmente il componente basterà lavorare sul css e sulla struttura html, cosa che non faremo in questa sede.

## Routing, redirect ed errori - LEZIONE 26

Vediamo come gestire gli errori ed eventuali redirect, per esempio potremmo avere l'errore 404. 

Creiamo il componente NotFound:

ng g c componenti/NotFound

Andiamo ad aggiungere il path dell'errore 404:

**app-routing.modules.ts**

```ts
const routes: Routes = [
  { path: '404', component: NotFoundComponent }
];
```

**not-found.component.html**

```html
<p>Errore 404</p>
```

Così abbiamo la pagina con "Errore 404" ma non abbiamo ancora la gestione dell'errore:

**app-routing.modules.ts**

```ts
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  // children è un array di altri path
  {
    path: 'contatti',
    component: ContattiComponent,
    children: [{ path: ':id', component: ContattoComponent }],
  },
  // "/:id" serve a indicare il parametro
  // { path: 'contatti/:id', component: ContattiComponent },
  { path: '404', component: NotFoundComponent },
  // Va messo in fondo altrimenti va a prendere tutti i path,
  // gli asterischi servono ad indicare qualsaisi path che non
  // sia tra quelli sopra elencati, con redirectTo si stabilisce
  // il path del redirect
  { path: '**', redirectTo: '/404' },
];
```

Se avessimo un path già dedicato alla homepage sul path vuoto dovremmo indicare un redirect direttamente sulla home page:

**app-routing.modules.ts**

```ts
const routes: Routes = [
  // Con pathMatch il path deve coincidere con il vuoto, o altrimenti
  // Angular in certe situazioni potrebbe prendere altre cose
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
```

## Proteggere l'accesso alle pagine con Routing Guard - LEZIONE 27

Vediamo come creare un servizio di **auth (authorization service)**, per fare ciò creiamo una sottocartella **auth** e creiamo un service da terminale:

**ng g s auth/auth**

Potevamo metterlo nella cartella servizi ma in genere si tende a mettere a parte questo elemento.

Stiamo facendo finta di prendere i dati per il login, cosa che non faremo adesso ma più avanti nel corso. 

**auth.service.ts**

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
```

Abbiamo creato l'auth service (benché sia fittizio), ora dobbiamo creare la guard effettiva, andiamo da terminale e digitiamo:

**ng g guard auth/auth**

Ci proporrà delle scelte riguardo l'interfaccia, selezioniamo **CanActivate**.

Come possiamo vedere auth.guard.ts ci dà un po' di roba, siccome non ci interessa tutto il codice, dopo RouterStateSnapshot leviamo i tipi di ritorno, il file quindi diventerà così:

**auth.guard.ts**

```ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
// CanActivate ha il suo metodo, che va a prendere lo snapshot
// della route attiva
export class AuthGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
  }
}
```

Adesso vogliamo importare in esso il nostro servizio aggiungendo il costruttore e modificando il return:

**auth.guard.ts**

```ts
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Dove c'è il return vogliamo ritornare isAuthenticated,
    // va a prendere il login e ci farà sapere se è effettivamente
    // connesso.
    return this.authService.isAuthenticated();
  }
}
```

In app-routing.module.ts andiamo a modificare il path contatti:

**app-routing.module.ts**

```ts
const routes: Routes = [
  {
    path: 'contatti',
    component: ContattiComponent,
    // Con canActivate stiamo dicendo che questo componente si può
    // attivare solo se AuthGuard restituisce true , il
    // quale restituisce true se isLoggedIn presente in
    // auth.service è true
    canActivate: [AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }],
  },
];

```

Se facciamo una prova non potremo più accedere alla pagina dei contatti. Possiamo farlo solo se modifichiamo isLoggedIn in auth.service da false a true.

Ora proviamo ad aggiungere un ruolo, nel senso che possiamo vedere il child del nostro componente esclusivamente se abbiamo un determinato ruolo.

**auth.service.ts**

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = true;
  isAdmin = true;

  constructor() {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }
}
```

**auth.guard.ts**

```ts
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
// CanActivate ha il suo metodo, che va a prendere lo snapshot
// della route attiva
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Dove c'è il return vogliamo ritornare isAuthenticated,
    // va a prendere il login e ci farà sapere se è effettivamente
    // connesso.
    return this.authService.isAuthenticated();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.isRoleAdmin();
  }
}
```

**app-routing.module.ts**

```ts
const routes: Routes = [
  {
    path: 'contatti',
    component: ContattiComponent,
    // Con canActivate stiamo dicendo che questo componente si può
    // attivare solo se AuthGuard restituisce true , il
    // quale restituisce true se isLoggedIn presente in
    // auth.service è true
    canActivate: [AuthGuard],
    // Con ActivateChild decidiamo se far vedere il path children
    // ciò dipende se isAdimn in auth.service è true o false
    canActivateChild: [AuthGuard],
    children: [{ path: ':id', component: ContattoComponent }],
  },
];
```

Con il codice sopra se isLoggedIn è true e isAdmin è true allora possiamo vedere sia il modulo contatti che i rispettivi figli. isLoggedIn regola l'accesso ai contatti mentre isAdmin ai singoli contatti.

