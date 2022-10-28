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

  constructor() {
    console.log('costruttore');
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

  // ng è Angular, On è un event, Init sta per Initialization
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
