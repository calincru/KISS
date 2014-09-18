#KISS
KISS is a minimalistic [Ghost](https://ghost.org/) theme inspired by
[Phantom](https://github.com/Bartinger/phantom).

You can see it live on [my blog](http://calincruceru.net).

## Features
- Minimalistic & responsive
- Google Analytics
- Disqus comments
- Icon-font ([Fontello](/assets/fonts/config.json))
- Linked social data support (twitter cards and opengraph)
- Minified assets
- Code syntax highlighting (via [prism](http://prismjs.com/))

## SEO
- Post tags as meta keywords

## Configuration

If you are testing ghost locally:
```bash
git clone git@github.com:calincru/KISS.git
cd KISS
npm install
./node_modules/.bin/gulp
cp -r ../KISS /path/to/ghost/content/themes
```
Then follow the steps mentioned [here](http://support.ghost.org/edit-ghost-theme/).

If you want to set it as your new ghost theme, click `Download ZIP` on the
right of this page and then follow
[these steps](http://support.ghost.org/upload-theme-ghostpro/).

**Note:** Make sure you modify all my personal stuff, such as:
- Social links
- Google Analytics tracking code ([sign
  up](https://accounts.google.com/ServiceLogin?service=analytics&userexp=signup&hl=en)
  and they will provide the whole new JS code)
- Twitter handle in default.hbs
- Static pages in page-projects.hbs

## Demo

**Desktop look**

![Desktop](http://i.imgur.com/ZFrEspa.jpg)

**Mobile look**

![Mobile](http://i.imgur.com/WUZCboI.jpg)

