import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss'],
})
export class ContattiComponent implements OnInit {
  // Se dovesse dare problemi andare su tsconfig.json
  // e aggiungere questa riga a compilerOptions:
  // "strictPropertyInitialization": false
  persone: any;
  persona: any;
  isProfile: boolean = false;

  // Il primo parametro prende i dati dal service
  // Il secondo parametro attiva la route
  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

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
}
