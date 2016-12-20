# CareMessage Website
The CareMessage website is built using [Jekyll](http://jekyllrb.com/), a static site generator.

## Requirements
1. Ruby. You can check if Ruby is installed with:
```
ruby -v
```
1. Bundler. To install Bundler, run:
```
gem install bundler
```

1. To install Jekyll and other required gems, clone this repo and run:
```
bundle install
```
You are ready to go!

## Local Development
* Start a local server at http://localhost:4000 with:
```
bundle exec jekyll serve
```
* The server will automatically rebuild the site whenever you make a change.
* Hit Ctrl-C to stop the server when you are done.

## Deployment
1. Build the site into the "\_site" directory:
```
bundle exec jekyll build
```
1. Copy the contents of the \_site directory to the server.

## Notes
* Sass partials are in "\_sass". They're imported in "css/style.scss", then
  compiled into "css/style.css" when the site is generated.
* Fonts come from Typekit and Google Fonts
* The career listing is fetched using the Greenhouse API.
* The contact form submits to Wufoo.
