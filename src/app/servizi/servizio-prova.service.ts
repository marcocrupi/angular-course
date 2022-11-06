import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  personeServiceLesson = [
    { nome: 'Luca', cognome: 'Rossi', isOnline: true, color: 'blue' },
    { nome: 'Marco', cognome: 'Verdi', isOnline: false, color: 'red' },
    { nome: 'Anna', cognome: 'Pannocchia', isOnline: false, color: 'yellow' },
    { nome: 'Leonardo', cognome: 'Sciascia', isOnline: true, color: 'green' },
    { nome: 'Maccio', cognome: 'Capatonda', isOnline: false, color: 'purple' },
  ];

  constructor() {}

  getPersona(index: number) {
    return this.personeServiceLesson[index];
  }

  getPersone() {
    return this.personeServiceLesson;
  }
}
