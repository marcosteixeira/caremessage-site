# CareMessage Website
The CareMessage website is built using [Jekyll](http://jekyllrb.com/), a static site generator.

## Requirements
Install Ruby. You can check if Ruby is already installed with:
```
ruby -v
```
Install Bundler:
```
gem install bundler
```
Install Jekyll and other required gems. Clone this repo and run:
```
bundle install
```
Now you are ready to go!

## Local Development
Start a local server at http://localhost:4000 with:
```
bundle exec jekyll serve
```
The server will automatically rebuild the site whenever you make a change. Hit Ctrl-C to stop the server when you are done.

## Deployment
First build the site into the "\_site" directory:
```
bundle exec jekyll build
```

Using configure_s3_website and s3_website gems run:

```
bundle exec s3_website push
```

## Notes
* Sass partials are in "\_sass". They're imported in "css/style.scss", then
  compiled into "css/style.css" when the site is generated.
* Fonts come from Typekit and Google Fonts
* The career listing is fetched using the Greenhouse API.
* The contact form submits to Wufoo.
