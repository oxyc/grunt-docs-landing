# grunt-docs-landing

Grunt plugin to generate a documentation landing page from the output of
other generators.

## Getting started

Install the plugin (not in npm yet) with `npm install git@github.com:oxyc/grunt-docs-landing.git`

Load the task in in your Gruntfile.js using:
```javascript
grunt.loadNpmTasks('grunt-docs-landing');
```

## Configuration

```javascript
docs: {
  sections: {
    js: 'docs/js/*.html', // Files will be listed under js
    php: 'docs/php/*.html' // Files will be listed under php
  },
  options: {
    out: 'docs/index.html', // Output file
    template: 'docs/layout/template.jst', // Template file
  }
}
```

The template will be passed a `sections` array which looks something similar to
this:

```
section = [{
  heading: 'js documentation',
  files: [{
    path: 'docs/js/app.html',
    name: 'app'
  }, {
    path: 'docs/js/main.html',
    name: 'main'
  }]
}];
```

Check out the example to get started.

## License

MIT
