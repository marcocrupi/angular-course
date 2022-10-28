import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss'],
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
  cani = [
    {
      nome: 'roger',
      razza: 'golden',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`,
    },
  ];

  // Proprietà da legare all'attributo disabled in html
  isDisabled = false;
  immagine = '';
  immagine1 =
    'https://gametimers.it/wp-content/uploads/2022/06/Berserk-Riprende-Serializzazione-Dopo-Un-Anno-Morte-Kentaro-Miura-747x420.jpeg.webp';
  immagine2 =
    'https://www.carteltec.com/wp-content/uploads/2021/07/1627566486_Berserk-las-noticias-no-son-buenas-sobre-el-futuro-del.jpeg';

  constructor() {
    console.log('costruttore');
  }

  // ng è Angular, On è un event, Init sta per Initialization
  ngOnInit(): void {
    console.log('ngOnInit');
    // In questo modo disabilitiamo e abilitiamo il pulsante ogni 2 secondi
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);

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

  // Tramite la correzione rapida abbiamo implementato tutte le interfacce
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
