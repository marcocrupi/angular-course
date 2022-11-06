import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.scss'],
})
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
