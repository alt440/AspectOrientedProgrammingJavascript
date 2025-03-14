# AspectOrientedProgrammingJavascript
Aspect-oriented programming using Javascript

This main branch does aspect programming by property names. Not very flexible. Based on this post here: https://www.ctnicholas.dev/notes/aspect-oriented-programming-in-javascript

I relied on a front-end framework to reproduce the architecture made in the post above. I didn't have the same version of javascript when trying to code in barebones JS.

Check out the aspectByFunction branch to make aspect programming in javascript more flexible (using before/after/error functions directly defined in the aspect files)

## Details on managing this project
### sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

#### Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

#### Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

#### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
