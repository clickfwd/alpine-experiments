## Alpine.js Experiments

All of the code in this repository is **probably not** ready for production use. Feel free to try it, but I'm not guaranteeing anything and won't support you.

### Experiments

* Code Organisation & Separation - [repo](./code-org), [url](http://alpine-experiments.ryangjchandler.co.uk/code-org)

I used this to look into a nice way of separating component logic using an ES Module syntax. The result was a non-bundled, non-Babel'd collection of JavaScript files that are compatible with all modern major browsers. Only the JavaScript needed for the current page is loaded, based on the components present.
