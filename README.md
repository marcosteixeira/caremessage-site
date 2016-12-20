# CareMessage Website

## Local Dev
* Install Ruby, Bundler, and Jekyll
* Run "jekyll serve" to build the site, watch for changes, and serve on port 4000

## Deployment
* Run "jekyll build" to build the site into the "\_site" directory
* Copy the contents of the \_site directory to the server

## Notes
* Sass partials are in "\_sass". They're imported in "css/style.scss", then compiled into "css/style.css"
* Careers are pulled in using the Greenhouse API.
* The contact form submits to Wufoo.
