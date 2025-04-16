# Compodoc Demo TodoMVC Angular

* goal
    * compodoc
        * architecture
        * components documentation
        * embedding images
        * document methods & properties of components, classes, interfaces, etc...

## How has it been created?
* -- via -- [angular-cli](https://github.com/angular/angular-cli)

## How to run compodoc?
* `npm ci`
* `npm run compodoc:build-and-serve`
  * render the documentation & serve
  * Problems:
    * Problem1: Why |browser, "http://127.0.0.1:8080/" NOT loaded?
      * Attempt1: `npx update-browserslist-db@latest`
      * Attempt2: [update browserlist to last Angular](https://angular.dev/reference/versions#browser-support)
      * Attempt3: [waiting for feedback](https://github.com/compodoc/compodoc-demo-todomvc-angular/issues/43)
      * Solution: TODO:

## Screenshots of the application - (for assets embedding demo)

| Home page                             | About page                             |
| ------------------------------------- | -------------------------------------- |
| ![Screenshot-1](screenshots/home.png) | ![Screenshot-2](screenshots/about.png) |
