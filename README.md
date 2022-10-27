# AngularCourse

Link al corso: https://youtube.com/playlist?list=PLP5MAKLy8lP-x-Ust2YGwspgt4wMJBFXJ

## Spiegazione File

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

Nella cartella app abbiamo dei file:

* app.module.ts è un file di "censimento", in declarations c'è la lista dei componenti che abbiamo, in imports la lista dei moduli che vogliamo utilizzare, ed infine i services. Tutto quello che utilizziamo in Angular deve passare da qua.
* Abbiamo inoltre i 3 file dei componenti (.ts - .html - .css).
* app-routing.module.ts un altro modulo che non fa altro che gestire il routing, ovvero il cambio delle pagine fittizio.


