# Getting Started

##### Make sure you have the prerequisites installed
###### Python3
  https://www.python.org/downloads/

###### Django

Install Django as per the instructions here
https://docs.djangoproject.com/en/1.9/topics/install/

###### Sass and Compass 

```sh
$ gem install sass
$ gem install compass
```

###### Bootstrap-Sass

```sh
$ gem install bootstrap-sass
```

###### Install Bower 

```sh
$ npm install -g bower
```

###### Install the development dependancies

```sh
$ npm install
```

*This creates a folder called node_modules used for building*

###### Then run 

```sh
$ bower update 
```
*This will create the assest/bower components*

###### Make sure you have Gulp installed

```sh
$ npm install --global gulp-cli
$ npm install --save-dev gulp
```

*Running gulp will build the project and deploy all the scss and js files*

###### running gulp watch

```sh
$ gulp watch
```

*Will watch the assets/sass and assets/js folders for changes*

