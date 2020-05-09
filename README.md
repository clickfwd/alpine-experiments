## Alpine.js Experiments

All of the code in this repository is **probably not** ready for production use. Feel free to try it, but I'm not guaranteeing anything and won't support you.

### Experiments

* Code Organisation & Separation - [repo](./code-org), [url](http://alpine-experiments.ryangjchandler.co.uk/code-org)

I used this to look into a nice way of separating component logic using an ES Module syntax. The result was a non-bundled, non-Babel'd collection of JavaScript files that are compatible with all modern major browsers. Only the JavaScript needed for the current page is loaded, based on the components present.

* Toasts - [repo](./toasts), [url](http://alpine-experiments.ryangjchandler.co.uk/toasts)

This experiment showcases how you can use Spruce to build a global "toast" system with a nice and clean API. You could actually extract this into a separate object, so that you don't have to call `$store.toasts`. You could easily create a `$toast` variable that interacts with `$store` under the hood.

