# KISS
TODO

## Features
- Minimalistic responsive
- Google Analytics
- Disqus comments
- Icon-font ([Fontello](/assets/fonts/config.json))

## SEO
- Post tags as meta keywords

### Dependencies

- Grunt
- Sass
- CSS minification
- Deployment via rsync

### Quickstart

```
git clone git@github.com:Bartinger/phantom.git
cd phantom
npm install
npm install -g grunt grunt-cli
bundle
```

### Notes

Using [Grunt](http://gruntjs.com) for development run ```gunt dev``` which watches the directory and does the ```sass``` compiling. *Note: Livereload extension must be installed, for it to work. I didn't include the connect middleware*.

To package the theme run ```grunt build``` and publish the new generated ```dist``` directory in your ghost theme directory. Run ```grunt compile``` to package the theme in the standalone directory.

## Grunt What?
Even though I highly recommend using Grunt, if you dont't know what it is and don't want to learn it (as a web developer you definitely should) you can use the standalone version. Take the ```standalone``` directory and copy it to your theme directory. It contains the whole theme with unminified css, ready for you to be edited.

TODO: This theme is based on.. and add pictures.
