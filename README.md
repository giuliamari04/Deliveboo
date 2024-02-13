<p align="center">
<span style="color:lightblue; font-size:5em; text-align:center;">Deliveboo</span>
<br>
<span style="text-align:center;" >Made by Giorgio Bolzoni, Matteo Bonelli, Giulia Mariano, Leonardo Mastrangelo, Giovanni Megliola, Mahdi Nasser</span>
</p>


<h2>Introduzione</h2>
<p>DeliveBoo è una web app che permette di ordinare cibo a domicilio nella città di ***.
Permette agli utenti di cercare i loro cibi preferiti, preparati dai loro ristoranti di fiducia. Tutto
rimanendo comodamente sul divano di casa.
</p>

<h2>Lista delle pagine</h2>
<ul>
<li>
<h3>Homepage:</h3>
<p>offre la possibilità di cliccare sulle tipologie di ristorante e senza il refresh della
pagina ottenere una lista di ristoranti con le tipologie di appartenenza sotto ogni
nome.</p>
</li>
<li>
<h3>Pagina Menù Ristoratore Pubblica:</h3>
<p>permette di visualizzare il menù di un particolare ristoratore.
È possibile scegliere i cibi desiderati e relativa quantità per inserirli nel carrello.
Il carrello si popola con i cibi selezionati e le relative quantità.</p>
</li>
<li>
<h3>Pagina carrello/checkout:</h3>
<p>permette di modificare le quantità dei cibi e di procedere all’ordine.
È possibile acquistare solo da un ristoratore alla volta.
Tramite questo pannello è possibile pagare inserendo i dettagli della carta di credito.</p>
</li>
</ul>


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

watch: {
        '$route.params.slug': function (newSlug, oldSlug) {
                if (newSlug !== oldSlug) {
                this.getOneProject();
            }
        }
    },