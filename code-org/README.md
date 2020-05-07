## Code Organisation

I was using this to play around with code organisation in Alpine.js

**My goals**:

* No bundling / transpiling of the code, just minification.
* Dynamically import the code for each component on the page.
* Use ES Module syntax for everything.
* Implement [Spruce](https://github.com/ryangjchandler/spruce).

**Things to look at**:

* All of the component declaration is done rather clearly in individual modules.
* If the component isn't found on the page, the module isn't loaded.
* This takes advantage of dynamic imports, supported natively (no transpilation) in all major browsers (last 2 versions of Edge).

**Go to the experiment now**: [experiment.html](./experiment.html).
**Go to the repository**: https://github.com/ryangjchandler/alpine-experiments