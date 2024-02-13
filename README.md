# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
## consegna esercizio 
Esercizio di oggi: Laravel Boolfolio - API
nome repo: vite-boolfolio
Ciao ragazzi,
continuiamo a lavorare sul codice dei giorni scorsi, ma in una nuova repo.
L’esercizio di oggi è suddiviso in milestone ed è importante che ne seguiate l’ordine.
# Milestone 1
Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Installiamo vue router e creiamo il file router.js con le rotte (almeno  home, projects, singolo progetto e fallback route)
# Milestone 2
Nel componente relativo alla lista dei progetti della nostra Vue App facciamo una chiamata API all’endpoint costruito nel progetto Laravel  e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente. Poi stampiamoli in pagina
 # Milestone 3
Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.
# Milestone 4
Creiamo un nuovo componente es. ProjectDetail che corrisponde alla rotta per visualizzare il singolo progetto completo di technologies e Type. Utilizziamo questo componente per visualizzare i dati ricevuti tramite API che recupera il singolo progetto.
Creiamo anche un componente NotFound per la rotta di fallback.
# Bonus:
Gestire la paginazione dei risultati nella pagina dei progetti
Creare una barra di navigazione in un componente header e un componente per il footer

watch: {
        '$route.params.slug': function (newSlug, oldSlug) {
                if (newSlug !== oldSlug) {
                this.getOneProject();
            }
        }
    },