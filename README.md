Agency Jekyll theme
====================

Agency theme based on [Agency bootstrap theme ](http://startbootstrap.com/templates/agency/)
Modifications:
 - PhotoSwipe gallery
 - Yandex map
 - nodejs mailer

# How to use

###Portfolio 

Portfolio projects are in '/_posts'

Images are in '/img/portfolio'

###About

Images are in '/img/about/'

###Team

Team members and info are in '_config.yml'

Images are in '/img/team/'

###Map

###nodejs mailer
Move mailer.js and mailer.json to folder not available from web! It's very important, because password from your email is stored in mailer.json.
Install some modules and run mailer.js as a service:
```
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install nodemailer
sudo npm install validator
sudo npm install forever
sudo npm install forever-service
sudo ln -s /usr/bin/nodejs /usr/bin/node
forever-service install mailer --script mailer.js
```

# Demo

View this jekyll theme in action [here](http://colibri-avia.ru)

=========
For more details, read [documentation](http://jekyllrb.com/)
