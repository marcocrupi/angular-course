import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattiComponent } from './componenti/contatti/contatti.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { HomeComponent } from './componenti/home/home.component';
import { NotFoundComponent } from './componenti/not-found/not-found.component';


const routes: Routes = [
  // Con pathMatch il path deve coincidere con il vuoto, o altrimenti
  // Angular in certe situazioni potrebbe prendere altre cose
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: 'homepage', component: HomeComponent },
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
