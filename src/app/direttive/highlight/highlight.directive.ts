import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // La proprietà va chiamata come il selettore
  @Input() appHighlight = '';

  @Input() defaultColor = '';

  // Vogliamo associare la direttiva a un elemento,
  // dobbiamo prendere il riferimento dell'elemento
  constructor(private element: ElementRef) {
    // Vogliamo cambiare il colore di background dell'elemento
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  // Passiamo il cambio di stile al decoratore HostListener
  // In questo modo gestiamo degli eventi "mouseenter" e "mouseleave"
  @HostListener('mouseenter') onMouseEnter() {
    // this.cambiaColore('red');
    // Questo operatore ci dice che se c'è un valore associato allora
    // lo usa, oppure usa this.defaultColor oppure se
    // non c'è manco questo usa "orange"
    this.cambiaColore(this.appHighlight || this.defaultColor || 'orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.cambiaColore('blue');
    this.cambiaColore('transparent');
  }

  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }
}
