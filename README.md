# CS 4400 Phase 4

## Setup and Run Instructions

1. Clone the git repo to your system using
`git clone https://github.com/1aryanpro/CS4400-Phase4.git`

2. Update `src/lib/db.js`.
```js
const pool = mysql.createPool({
    host: 'localhost', // <--
    user: 'root',      // <--
    password: '',      // <--
    // ...
});
```
You likely won't have to change the `host` or `user` but put in the password you
use for your SQL instance.

3. Run the repo using `npm run dev`. This will use Vite to build the website and
   will host it on [http://localhost:5173/](http://localhost:5173/) by default
however it might be difference based on what ports are open.

4. To stop running the website, close out of the terminal window or `ctrl-c`.

## Technologies

### Svelte & SvelteKit

Svelte is a javascript templating library that we used to create the different
views and forms on the website. SvelteKit is an app framework on top of Svelte
that handles things like routing allowing us make multiple pages in a
programmatic way.

### HTML & CSS

The pages are all written in HTML and we used CSS to style them.

### mysql2

This is a package that allows us to connect to the MySQL server to trigger the
procedures and query the views.

## Work Distribution

### Aryan Prodduturi

- Setup the Svelte project and configured mysql2 package
- Created some of the styles

### Sandip Das

- Created the MySQL integration for all the views
- Created some of the styles

### Sharon Arulpragasam

- Created the MySQL integration for all the procedures

### Suhaib Dashash

- Tested the procedures
- Created some of the styles
